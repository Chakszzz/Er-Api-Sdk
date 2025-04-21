import * as openRouter from "./er-api";
import * as img from "./img";
import * as games from "./games";
import * as dl from "./dl";
import * as primbon from "./primbon";
import { custom, registerCustomEndpoint, getCustomEndpoints } from "./custom";
import { setBaseUrl, getBaseUrl } from "./config";

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
  generate: openRouter.generate,
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
    const sdk = { ...ErApiSdk };
    sdk.openRouter = openRouter.OpenErApi.fromEnv();
    return sdk;
  },
};

export const er = ErApiSdk;
export default ErApiSdk;

export { openRouter, img, games, dl, primbon };
export { custom } from "./custom";
