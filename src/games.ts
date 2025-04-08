import axios from "axios";
import { baseUrl } from "./config";

/**
 * Helper to fetch data from game endpoints
 * @param path - Endpoint path under /games
 * @returns Promise resolving to string response
 * @throws Will throw error if request fails or response is invalid
 */
async function fetchGame(path: string): Promise<string> {
  if (!path || typeof path !== "string") {
    throw new Error("Invalid path: must be a non-empty string");
  }

  const url = new URL(path, baseUrl).toString();

  try {
    const response = await axios.get<string>(url, {
      timeout: 10000,
      validateStatus: (status) => status === 200,
    });

    return response.data;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error occurred";
    console.error(`Failed to fetch game data from ${path}:`, err);
    throw new Error(`Game service unavailable: ${message}`);
  }
}

// Game endpoint types
type GameEndpoint =
  | "tebakkata"
  | "tebakkabupaten"
  | "asahotak"
  | "tebaklirik"
  | "caklontong"
  | "family100"
  | "siapakahaku"
  | "susunkata"
  | "tebakbendera"
  | "tebakgambar"
  | "tebakkimia"
  | "tebaktebakan"
  | "tekateki"
  | "truth"
  | "dare";

/**
 * Factory function to create game API functions
 */
function createGameFunction(endpoint: GameEndpoint): () => Promise<string> {
  return () => fetchGame(`/games/${endpoint}`);
}

// Export all game functions
export const tebakkata = createGameFunction("tebakkata");
export const tebakkabupaten = createGameFunction("tebakkabupaten");
export const asahotak = createGameFunction("asahotak");
export const tebaklirik = createGameFunction("tebaklirik");
export const caklontong = createGameFunction("caklontong");
export const family100 = createGameFunction("family100");
export const siapakahaku = createGameFunction("siapakahaku");
export const susunkata = createGameFunction("susunkata");
export const tebakbendera = createGameFunction("tebakbendera");
export const tebakgambar = createGameFunction("tebakgambar");
export const tebakkimia = createGameFunction("tebakkimia");
export const tebaktebakan = createGameFunction("tebaktebakan");
export const tekateki = createGameFunction("tekateki");
export const truth = createGameFunction("truth");
export const dare = createGameFunction("dare");
