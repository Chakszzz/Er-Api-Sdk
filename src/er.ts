import * as openRouter from './er-api';
import * as img from './img';
import * as games from './games';
import * as dl from './dl';
import * as primbon from './primbon';
import { custom, registerCustomEndpoint, getCustomEndpoints } from './custom';
import { setBaseUrl, getBaseUrl } from './config';

const ErApiSdk = {
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
  chat: openRouter.chat,
  reasoning: openRouter.reasoning,
  gpt4: openRouter.gpt4,
  gpt35: openRouter.gpt35,
  claude3: openRouter.claude3,
  claude3s: openRouter.claude3s,
  claude3h: openRouter.claude3h,
  mistral: openRouter.mistral,
  gemini: openRouter.gemini,
  gemini2: openRouter.gemini2,
  llama3: openRouter.llama3,
  mixtral: openRouter.mixtral,
  llamavision: openRouter.llamavision,
  brat: img.brat,
  text2img: img.text2img,
  ermp3: dl.ermp3,
  ermp4: dl.ermp4,
  ttdl: dl.ttdl,
  xnxx: dl.xnxx,
  spotify: dl.spotify,
  fromEnv: () => {
    const apiInstance = openRouter.OpenErApi.fromEnv();
    const sdk = { ...ErApiSdk };
    sdk.chat = (modelId: string, prompt: string, params?: any) =>
      apiInstance.chat(modelId, prompt, params);
    sdk.reasoning = (modelId: string, prompt: string, params?: any) =>
      apiInstance.reasoning(modelId, prompt, params);
    sdk.getModels = () => apiInstance.getModels();
    sdk.checkModel = (modelId: string) => apiInstance.checkModel(modelId);
    sdk.gpt4 = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.gpt4, prompt, params);
    sdk.gpt35 = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.gpt35, prompt, params);
    sdk.claude3 = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.claude3, prompt, params);
    sdk.claude3s = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.claude3s, prompt, params);
    sdk.claude3h = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.claude3h, prompt, params);
    sdk.mistral = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.mistral, prompt, params);
    sdk.gemini = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.gemini, prompt, params);
    sdk.gemini2 = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.gemini2, prompt, params);
    sdk.llama3 = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.llama3, prompt, params);
    sdk.mixtral = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.mixtral, prompt, params);
    sdk.llamavision = (prompt: string, params?: any) =>
      apiInstance.chat(openRouter.MODEL_ALIASES.llamavision, prompt, params);

    sdk.openRouter = {
      ...openRouter,
      getModels: () => apiInstance.getModels(),
      checkModel: (modelId: string) => apiInstance.checkModel(modelId),
      chat: (modelId: string, prompt: string, params?: any) =>
        apiInstance.chat(modelId, prompt, params),
      reasoning: (modelId: string, prompt: string, params?: any) =>
        apiInstance.reasoning(modelId, prompt, params),
    };

    return sdk;
  },
};

export const er = ErApiSdk;
export default ErApiSdk;

export { openRouter, img, games, dl, primbon };
export { custom } from './custom';
