import { SystemPrompt } from "../prompt/system-prompt"
import { ModelOption } from "./model"

export interface ExtensionState {
	version: string
	uriScheme?: string
	apiConfiguration?: ApiConfiguration
	systemPrompts: SystemPrompt[]
	systemPrompt: SystemPrompt
	modelOptions: ModelOption[]
}

export type ApiProvider =
	| "anthropic"
	| "openrouter"
	| "bedrock"
	| "vertex"
	| "openai"
	| "ollama"
	| "lmstudio"
	| "gemini"
	| "openai-native"
	| "deepseek"

type ApiConfiguration = {
	apiProvider?: ApiProvider
}

export function getSystemPromptNameByID(systemPrompts: SystemPrompt[], id: string): string {
    const prompt = systemPrompts.find(prompt => prompt.id === id);
    return prompt?.name || id;
}

export function getCurrentModelName(state: ExtensionState | undefined): string {
	if (!state) {
		return "";
	}
    const found = state.modelOptions.find(entry => entry.id === state.apiConfiguration?.apiProvider);
    return found?.name || "";
}