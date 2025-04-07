import * as ai from "./ai";
import * as img from "./img";
import * as games from "./games";
import * as dl from "./dl";
import * as primbon from "./primbon";
import { custom, registerCustomEndpoint, getCustomEndpoints } from "./custom";
import { setApiKey, setBaseUrl, getBaseUrl } from "./config";

// Main er object
export const er = {
  // Main API categories
  ai,
  img,
  games,
  dl,
  primbon,
  
  // Custom endpoints
  custom,
  
  // Configuration methods
  setApiKey,
  getBaseUrl,
  setBaseUrl,
  registerCustomEndpoint,
  getCustomEndpoints,
  
  // Shortcut methods for popular functions
  deepseek: ai.deepseek,
  openai: ai.openai,
  cohere: ai.cohere,
  anthropic: ai.anthropic,
  gemini: ai.gemini,
  brat: img.brat,
  generate: img.generate,
  tex2img: img.text2img,
  ermp3: dl.ermp3,
  ermp4: dl.ermp4,
};