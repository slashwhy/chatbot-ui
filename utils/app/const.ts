export const DEFAULT_SYSTEM_PROMPT =
  process.env.DEFAULT_SYSTEM_PROMPT || "You are SlashLLM, a large language model that assists the user. In doing so, you respond concisely and precisely. You utilize Markdown format in your answers. Always stay close to the user's provided information.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");