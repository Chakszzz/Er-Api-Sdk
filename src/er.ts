import * as ai from "./ai";
import * as img from "./img";
import * as games from "./games";
import * as dl from "./dl";
import * as primbon from "./primbon";
import { custom, registerCustomEndpoint, getCustomEndpoints } from "./custom";
import { setApiKey, setBaseUrl, getBaseUrl } from "./config";

const ErApiSdk = {
  ai,
  img,
  games,
  dl,
  primbon,
  custom,
  setApiKey,
  setBaseUrl,
  getBaseUrl,
  registerCustomEndpoint,
  getCustomEndpoints,
  deepseek: ai.deepseek,
  openai: ai.openai,
  cohere: ai.cohere,
  anthropic: ai.anthropic,
  gemini: ai.gemini,
  groq: ai.groq,
  mistral: ai.mistral,
  together: ai.together,
  nlpc: ai.nlpc,
  huggingface: ai.huggingface,
  perplexity: ai.perplexity,
  brat: img.brat,
  generate: img.generate,
  text2img: img.text2img,
  ermp3: dl.ermp3,
  ermp4: dl.ermp4,
  ttdl: dl.ttdl,
  xnxx: dl.xnxx,
  spotify: dl.spotify
};

export const er = ErApiSdk;
export default ErApiSdk;

export { ai, img, games, dl, primbon };
export { custom } from './custom';