export * from "./er";

export {
  deepseek,
  openai,
  groq,
  huggingface,
  together,
  mistral,
  perplexity,
  nlpc,
  anthropic,
  cohere
} from './ai';

export {
  brat,
  generate,
  text2img
} from './img';

export {
  ermp3,
  ermp4,
  ttdl,
  xnxx,
  spotify
} from './dl';

import ErApiSdk, { er } from "./er";

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = {
    ...ErApiSdk,
    default: ErApiSdk,
    er
  };
}