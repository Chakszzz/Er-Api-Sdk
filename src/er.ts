// src/index.ts

import * as ai from "./ai";
import * as get from "./get";
import * as games from "./games";
import { setApiKey, setBaseUrl } from "./config";

// Shortcut langsung
export const deepseek = ai.deepseek;
export const openai = ai.openai;
export const cohere = ai.cohere;
// Tambahkan jika ada provider lain...

export const brat = get.brat;
export const waifu = get.waifu;
export const pint = get.pinterest;
// Tambahkan jika ada endpoint /get lainnya...

// Main er object
export const er = {
  ai,
  get,
  games,
  setApiKey,
  setBaseUrl,
};