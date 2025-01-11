import Parser from "web-tree-sitter"

export interface CategoryOption {
    title: string
    model: string
    provider: string
    badge?: string
}

export interface CategoryList {
    title: string
    description?: string
    options: CategoryOption[]
}

export interface LanguageParser {
	[key: string]: {
		parser: Parser
		query: Parser.Query
	}
}