import * as vscode from "vscode"
import { globalLanguageParser } from "../../services/tree-sitter/alineParser"
import path from "path"

export class CommandCodeLens implements vscode.CodeLensProvider {
    private codeLenses: vscode.CodeLens[] = []
    private _onDidChangeCodeLenses: vscode.EventEmitter<void> = new vscode.EventEmitter<void>()
    public readonly onDidChangeCodeLenses: vscode.Event<void> = this._onDidChangeCodeLenses.event

    constructor() {
        // Refresh codelenses when configuration changes
        vscode.workspace.onDidChangeConfiguration((_) => {
            this._onDidChangeCodeLenses.fire()
        })

        // Refresh codelenses when text document changes
        vscode.workspace.onDidChangeTextDocument((_) => {
            this._onDidChangeCodeLenses.fire()
        })

        // Refresh codelenses when the active editor changes
        vscode.window.onDidChangeActiveTextEditor((_) => {
            this._onDidChangeCodeLenses.fire()
        })

        // Initial refresh for any already open editors
        this._onDidChangeCodeLenses.fire()
    }

    public async provideCodeLenses(
        document: vscode.TextDocument,
        token: vscode.CancellationToken
    ): Promise<vscode.CodeLens[]> {
        if (token.isCancellationRequested) {
            return []
        }
        
        this.codeLenses = []
        const fileExt = path.extname(document.fileName).slice(1)

        try {
            // Check if we have a parser for this file type
            if (!globalLanguageParser.hasParser(fileExt)) {
                console.log(`no parser for ${fileExt}`)
                return []
            }

            const { parser, query } = globalLanguageParser.getParser(fileExt)
            const tree = parser.parse(document.getText())
            const captures = query.captures(tree.rootNode)

            // Add codelens for each function/method/class definition
            for (const capture of captures) {
                if (capture.name.startsWith('definition')) {
                    const range = new vscode.Range(
                        document.positionAt(capture.node.startIndex),
                        document.positionAt(capture.node.endIndex)
                    )

                    // Add multiple CodeLens for each definition
                    const codeLensCommands = [
                        {
                            title: "💡 Explain",
                            tooltip: "Get an explanation of this code",
                            command: "aline.executeCodelenCommand",
                            arguments: [{
                                document,
                                range,
                                nodeType: capture.name,
                                action: 'explain'
                            }]
                        },
                        {
                            title: "📝 Comment",
                            tooltip: "Generate comments for this code",
                            command: "aline.executeCodelenCommand",
                            arguments: [{
                                document,
                                range,
                                nodeType: capture.name,
                                action: 'comment'
                            }]
                        },
                        {
                            title: "🔧 Fix",
                            tooltip: "Suggest improvements or fixes",
                            command: "aline.executeCodelenCommand",
                            arguments: [{
                                document,
                                range,
                                nodeType: capture.name,
                                action: 'fix'
                            }]
                        },
                        {
                            title: "💬 Ask",
                            tooltip: "Ask questions about this code",
                            command: "aline.executeCodelenCommand",
                            arguments: [{
                                document,
                                range,
                                nodeType: capture.name,
                                action: 'ask'
                            }]
                        }
                    ]

                    // Add all CodeLens commands for this range
                    codeLensCommands.forEach(cmd => {
                        this.codeLenses.push(new vscode.CodeLens(range, cmd))
                    })
                }
            }
        } catch (error) {
            console.error("Error providing code lenses:", error)
        }

        return this.codeLenses
    }
}
