import * as ai from "./ai";
import * as img from "./img";
import * as games from "./games";
import * as dl from "./dl";
import * as primbon from "./primbon";
import { custom, registerCustomEndpoint, getCustomEndpoints } from "./custom";
import { setApiKey, setBaseUrl, getBaseUrl } from "./config";

export * from './types';
export default ErApiSdk;

export const {
  setApiKey,
  setBaseUrl,
  getBaseUrl,
  registerCustomEndpoint,
  getCustomEndpoints,
  deepseek,
  openai,
  cohere,
  anthropic,
  gemini,
  groq,
  mistral,
  together,
  nlpc,
  huggingface,
  perplexity,
  brat,
  generate,
  tex2img,
  ttdl,
  xnxx,
  spotify
} = ErApiSdk;

export { ai, img, games, dl, primbon };
export { custom } from './custom';