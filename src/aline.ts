import * as vscode from "vscode"
import { globalLanguageParser } from "./services/tree-sitter/alineParser"
import path from "path"
import { CommandCodeLens } from "./integrations/codelens/CommandProvider"
import { ClineProvider } from "./core/webview/ClineProvider"

export function alineActivate(context: vscode.ExtensionContext, sidebarProvider: ClineProvider) {
    // Initialize parser
    globalLanguageParser.initialize()

    // Register CodeLens provider
    const supportedLanguages = ['javascript', 'python', 'java', 'typescript']
    const provider = new CommandCodeLens()
    
    // Register for each supported language
    supportedLanguages.forEach(language => {
        context.subscriptions.push(
            vscode.languages.registerCodeLensProvider(
                { scheme: 'file', language },
                provider
            )
        )
    })

    // Force an initial update of CodeLenses for any already open editors
    if (vscode.window.activeTextEditor) {
        provider.provideCodeLenses(vscode.window.activeTextEditor.document, new vscode.CancellationTokenSource().token)
    }

	// Register command handler
	context.subscriptions.push(
		vscode.commands.registerCommand('aline.executeCodelenCommand', async (args: {
			document: vscode.TextDocument,
			range: vscode.Range,
			nodeType: string,
			action: 'explain' | 'comment' | 'fix' | 'ask'
		}) => {
			const code = args.document.getText(args.range)
			const fileName = args.document.fileName
			
			// Create different messages based on the action
			let message: string
			switch (args.action) {
				case 'explain':
					message = `Please explain this code in ${path.basename(fileName)}:\n\n\`\`\`\n${code}\n\`\`\`\n\n`
					break
				case 'comment':
					message = `Please generate comprehensive comments for this code in ${path.basename(fileName)}:\n\n\`\`\`\n${code}\n\`\`\`\n\n`
					break
				case 'fix':
					message = `Please review and suggest improvements or fixes for this code in ${path.basename(fileName)}:\n\n\`\`\`\n${code}\n\`\`\`\n\n`
					break
				case 'ask':
					message = `I have a question about this code in ${path.basename(fileName)}:\n\n\`\`\`\n${code}\n\`\`\`\n\n`
					break
			}
			// console.log(`message: ${message}`)
            await sidebarProvider.initClineWithTask(message, undefined)
            if (sidebarProvider.InClineView()) {
                await sidebarProvider.switchToChatView()
            }
		})
	)
}

export function alineDeactivate() {
}