import axios from "axios";
import { baseUrl } from "./config";

/**
 * Helper to fetch plain string data from game endpoints.
 * @param path - Endpoint path under /games
 * @returns String response
 */
async function fetchGame(path: string): Promise<string> {
  const url = `${baseUrl}${path}`;
  const res = await axios.get(url);
  return res.data;
}

/**
 * Guess the word challenge.
 */
export async function tebakkata(): Promise<string> {
  return fetchGame("/games/tebakkata");
}

/**
 * Guess the regency (kabupaten).
 */
export async function tebakkabupaten(): Promise<string> {
  return fetchGame("/games/tebakkabupaten");
}

/**
 * Solve a brain teaser (asah otak).
 */
export async function asahotak(): Promise<string> {
  return fetchGame("/games/asahotak");
}

/**
 * Guess the lyrics challenge.
 */
export async function tebaklirik(): Promise<string> {
  return fetchGame("/games/tebaklirik");
}

/**
 * Classic Indonesian wordplay: Cak Lontong.
 */
export async function caklontong(): Promise<string> {
  return fetchGame("/games/caklontong");
}

/**
 * Family 100-style guessing game.
 */
export async function family100(): Promise<string> {
  return fetchGame("/games/family100");
}

/**
 * Who am I guessing game.
 */
export async function siapakahaku(): Promise<string> {
  return fetchGame("/games/siapakahaku");
}

/**
 * Unscramble the letters.
 */
export async function susunkata(): Promise<string> {
  return fetchGame("/games/susunkata");
}

/**
 * Guess the country flag.
 */
export async function tebakbendera(): Promise<string> {
  return fetchGame("/games/tebakbendera");
}

/**
 * Visual puzzle guessing game.
 */
export async function tebakgambar(): Promise<string> {
  return fetchGame("/games/tebakgambar");
}

/**
 * Guess the chemical element.
 */
export async function tebakkimia(): Promise<string> {
  return fetchGame("/games/tebakkimia");
}

/**
 * General riddles.
 */
export async function tebaktebakan(): Promise<string> {
  return fetchGame("/games/tebaktebakan");
}

/**
 * Brain teasers and puzzles.
 */
export async function tekateki(): Promise<string> {
  return fetchGame("/games/tekateki");
}

/**
 * Truth question for games.
 */
export async function truth(): Promise<string> {
  return fetchGame("/games/truth");
}

/**
 * Dare challenge for games.
 */
export async function dare(): Promise<string> {
  return fetchGame("/games/dare");
}