export * from './er';

export { custom, registerCustomEndpoint, getCustomEndpoints } from './custom';
export { setBaseUrl, getBaseUrl } from './config';

export {
  OpenErApi,
  openRouter,
  chat,
  reasoning,
  getModels,
  checkModel,
  claude1,
  deepseek,
  deepcoder,
  mistral,
  gemini2,
  llama3,
  mixtral,
  llamavision,
  MODEL_ALIASES,
} from './er-api';

export { brat, generate as imgGenerate, text2img } from './img';

export { ermp3, ermp4, ttdl, xnxx, spotify } from './dl';

import ErApiSdk from './er';

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    ...ErApiSdk,
    default: ErApiSdk,
  };
}
