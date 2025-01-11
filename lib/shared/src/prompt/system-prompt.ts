export type SystemPrompt = {
	id: string
	name: string
	prompt: string
    category: string
}

export const CLINE_SYSTEM_PROMPT: SystemPrompt = {
	id: "cline",
	name: "CLINE",
	prompt: "default",
    category: "CLINE"
}

export function isClineBuiltInPrompt(prompt: SystemPrompt): boolean {
	return prompt.id.toLowerCase() === CLINE_SYSTEM_PROMPT.id
}

export const DEFAULT_SYSTEM_PROMPT_STR = `
[
    {
        "id": "cline",
        "name": "CLINE",
        "prompt": "default",
        "category": "CLINE"
    },
    {
        "id": "deepseek-chat",
        "name": "Chatbot",
        "category": "Assistant",
        "prompt": "You are a chat bot, you neet to answer my question. your answers are brief, concise and fact-based in Chinese."
    },
    {
        "id": "deepseek-coder",
        "name": "Coder",
        "category": "Assistant",
        "prompt": "You are an AI programming assistant. Follow the user's requirements carefully and to the letter. First, think step-by-step and describe your plan for what to build in pseudocode, written out in great detail. Then, output the code in a single code block. Minimize any other prose."
    }
]
`