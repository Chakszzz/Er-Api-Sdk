import * as openRouter from "./er-api";
import * as img from "./img";
import * as games from "./games";
import * as dl from "./dl";
import * as primbon from "./primbon";
import { custom, registerCustomEndpoint, getCustomEndpoints } from "./custom";
import { setBaseUrl, getBaseUrl } from "./config";
import { ModelParams } from "./types";

export const ErApiSdk = {
  openRouter,
  img,
  games,
  dl,
  primbon,
  custom,
  setBaseUrl,
  getBaseUrl,
  registerCustomEndpoint,
  getCustomEndpoints,
  getModels: openRouter.getModels,
  checkModel: openRouter.checkModel,
  artinama: primbon.artinama,
  nomorhoki: primbon.nomorhoki,
  chat: openRouter.chat,
  reasoning: openRouter.reasoning,
  claude1: openRouter.claude1,
  deepseek: openRouter.deepseek,
  deepcoder: openRouter.deepcoder,
  mistral: openRouter.mistral,
  gemini2: openRouter.gemini2,
  llama3: openRouter.llama3,
  mixtral: openRouter.mixtral,
  llamavision: openRouter.llamavision,
  brat: img.brat,
  text2img: img.text2img,
  ermp3: dl.ermp3,
  ytmp3: dl.ermp3,
  ytmp4: dl.ermp4,
  ermp4: dl.ermp4,
  ttdl: dl.ttdl,
  xnxx: dl.xnxx,
  spotify: dl.spotify,
  fromEnv: () => {
    const apiInstance = openRouter.OpenErApi.fromEnv();
    const sdk = { ...ErApiSdk };
    sdk.chat = (modelId: string, prompt: string, params?: ModelParams) =>
      apiInstance.chat(modelId, prompt, params);
    sdk.reasoning = (modelId: string, prompt: string, params?: ModelParams) =>
      apiInstance.reasoning(modelId, prompt, params);
    sdk.getModels = () => apiInstance.getModels();
    sdk.checkModel = (modelId: string) => apiInstance.checkModel(modelId);
    sdk.claude1 = (prompt: string, params?: ModelParams) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.claude1, prompt, params);
    sdk.deepseek = (prompt: string, params?: ModelParams) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.deepseek, prompt, params);
    sdk.deepcoder = (prompt: string, params?: ModelParams) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.deepcoder, prompt, params);
    sdk.mistral = (prompt: string, params?: ModelParams) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.mistral, prompt, params);
    sdk.gemini2 = (prompt: string, params?: ModelParams) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.gemini2, prompt, params);
    sdk.llama3 = (prompt: string, params?: ModelParams) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.llama3, prompt, params);
    sdk.mixtral = (prompt: string, params?: ModelParams) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.mixtral, prompt, params);
    sdk.llamavision = (prompt: string, params?: ModelParams) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.llamavision, prompt, params);

    sdk.openRouter = {
      ...openRouter,
      getModels: () => apiInstance.getModels(),
      checkModel: (modelId: string) => apiInstance.checkModel(modelId),
      chat: (modelId: string, prompt: string, params?: ModelParams) =>
        apiInstance.chat(modelId, prompt, params),
      reasoning: (modelId: string, prompt: string, params?: ModelParams) =>
        apiInstance.reasoning(modelId, prompt, params),
    };

    return sdk;
  },
};

export default ErApiSdk;

export { openRouter, img, games, dl, primbon };
export { custom } from "./custom";
