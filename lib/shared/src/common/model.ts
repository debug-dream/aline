
export interface ModelOption {
    id: string
    name: string
    visible: boolean
    order: number
    status?: string
    category: string
}
 
/*
  {
    title: 'More powerful models',
    models: [
      {
        title: 'Claude 3.5 Sonnet',
        model: 'claude-3.5-sonnet',
        provider: 'anthropic'
      },
      {
        title: 'OpenAI o1-preview',
        model: 'o1-preview',
        provider: 'openai',
        badge: 'Early Access'
      }
    ]
  },
*/
export const DEFAULT_MODEL_OPTION_STR = `

[
  {
    "id": "openrouter",
    "name": "OpenRouter",
    "visible": true,
    "order": 1
  },
  {
    "id": "deepseek",
    "name": "DeepSeek V3",
    "visible": true,
    "order": 2
  },
  {
    "id": "anthropic", 
    "name": "Anthropic",
    "visible": true,
    "order": 102
  },
  {
    "id": "openai",
    "name": "OpenAI Compatible",
    "visible": true,
    "order": 103
  },
  {
    "id": "openai-native",
    "name": "OpenAI",
    "visible": true,
    "order": 104
  },
  {
    "id": "ollama",
    "name": "Ollama",
    "visible": true,
    "order": 105
  },
  {
    "id": "bedrock",
    "name": "AWS Bedrock",
    "visible": false,
    "order": 106
  },
  {
    "id": "vertex",
    "name": "Vertex AI",
    "visible": false,
    "order": 107
  },
  {
    "id": "lmstudio",
    "name": "LM Studio",
    "visible": false,
    "order": 108
  },
  {
    "id": "gemini",
    "name": "Gemini",
    "visible": true,
    "order": 109
  }
]

`;