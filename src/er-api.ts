import axios from "axios";
import { baseUrl } from "./config";
import { ModelParams, ModelResponse, StreamChunk, ModelInfo, ModelsResponse } from "./types";
import { MissingApiKeyError } from "./errors";

/**
 * OpenRouter client for accessing AI models through ER-API
 */
export class OpenErApi {
  private key: string;

  /**
   * Creates a new OpenRouter API client instance
   * @param key - OpenRouter API key (obtain from platform.er-api.biz.id)
   */
  constructor(key?: string) {
    this.key = key || "";
  }

  /**
   * Create OpenRouter client from environment variables
   * @returns An initialized OpenRouter API client
   */
  static fromEnv(): OpenErApi {
    const key = process.env.OPENROUTER_API_KEY || "";
    return new OpenErApi(key);
  }

  /**
   * Set OpenRouter API key
   * @param key - OpenRouter API key
   */
  setApiKey(key: string): void {
    this.key = key;
  }

  /**
   * Get the current API key
   * @returns The current OpenRouter API key
   */
  getApiKey(): string {
    if (!this.key) {
      throw new MissingApiKeyError("Api key not set");
    }
    return this.key;
  }

  /**
   * Get a list of all available AI models
   * @returns Promise resolving to the model list response
   */
  async getModels(): Promise<ModelsResponse> {
    try {
      const url = `${baseUrl}/ai/models`;
      const params: Record<string, string> = {};

      if (this.key) {
        params.key = this.key;
      }

      const response = await axios.get<ModelsResponse>(url, { params });
      return response.data;
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  /**
   * Check if a specific model is available
   * @param modelId - The model ID to check
   * @returns Promise resolving to the model information if available
   */
  async checkModel(modelId: string): Promise<ModelInfo> {
    try {
      const url = `${baseUrl}/ai/models/${modelId}`;
      const params: Record<string, string> = {};

      if (this.key) {
        params.key = this.key;
      }

      const response = await axios.get<ModelInfo>(url, { params });
      return response.data;
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  /**
   * Generate a response from an AI model
   * @param modelId - The model ID to use (e.g. "anthropic/claude-3-opus")
   * @param prompt - User prompt/query text
   * @param params - Optional parameters for the model
   * @returns Promise resolving to the model response
   */
  async chat(
    modelId: string,
    prompt: string,
    params?: ModelParams,
  ): Promise<ModelResponse> {
    if (!prompt?.trim()) {
      throw new Error("Prompt cannot be empty");
    }

    const hasCustomParams =
      params &&
      (params.system !== undefined ||
        params.max_tokens !== undefined ||
        params.maxtokens !== undefined ||
        params.top_p !== undefined ||
        params.frequency_penalty !== undefined ||
        params.presence_penalty !== undefined ||
        params.temperature !== undefined);

    if (hasCustomParams && !this.key) {
      throw new MissingApiKeyError(
        "OpenRouter API key required when using custom parameters.\n\n> Visit: https://platform.er-api.biz.id to get apikey",
      );
    }

    try {
      const queryParams: Record<string, string> = {
        t: prompt,
      };

      if (this.key) {
        queryParams.key = this.key;
      }

      if (params?.system) queryParams.system = params.system;
      if (params?.temperature !== undefined)
        queryParams.temperature = params.temperature.toString();
      if (params?.max_tokens !== undefined)
        queryParams.max_tokens = params.max_tokens.toString();
      if (params?.maxtokens !== undefined)
        queryParams.maxtokens = params.maxtokens.toString();
      if (params?.top_p !== undefined)
        queryParams.top_p = params.top_p.toString();
      if (params?.frequency_penalty !== undefined)
        queryParams.frequency_penalty = params.frequency_penalty.toString();
      if (params?.presence_penalty !== undefined)
        queryParams.presence_penalty = params.presence_penalty.toString();

      // Make API request
      const url = `${baseUrl}/ai/${modelId}`;
      const response = await axios.get<ModelResponse>(url, { params: queryParams });
      return response.data;
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  /**
   * Generate a response with step-by-step reasoning
   * @param modelId - The model ID to use
   * @param prompt - User prompt/query text
   * @param params - Optional parameters for the model
   * @returns Promise resolving to the model response with reasoning
   */
  async reasoning(
    modelId: string,
    prompt: string,
    params?: ModelParams,
  ): Promise<ModelResponse> {
    if (!prompt?.trim()) {
      throw new Error("Prompt cannot be empty");
    }

    try {
      const queryParams: Record<string, string> = {
        t: prompt,
      };

      if (this.key) {
        queryParams.key = this.key;
      }

      if (params?.system) queryParams.system = params.system;
      if (params?.temperature !== undefined)
        queryParams.temperature = params.temperature.toString();
      if (params?.max_tokens !== undefined)
        queryParams.max_tokens = params.max_tokens.toString();
      if (params?.maxtokens !== undefined)
        queryParams.maxtokens = params.maxtokens.toString();
      if (params?.top_p !== undefined)
        queryParams.top_p = params.top_p.toString();
      if (params?.frequency_penalty !== undefined)
        queryParams.frequency_penalty = params.frequency_penalty.toString();
      if (params?.presence_penalty !== undefined)
        queryParams.presence_penalty = params.presence_penalty.toString();

      // Make API request
      const url = `${baseUrl}/ai/${modelId}/reasoning`;
      const response = await axios.get<ModelResponse>(url, { params: queryParams });
      return response.data;
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  /**
   * Generate a streaming response from an AI model
   * @param modelId - The model ID to use
   * @param prompt - User prompt/query text
   * @param onData - Callback function for data chunks
   * @param onError - Callback function for errors
   * @param onComplete - Callback function called when stream is complete
   * @param params - Optional parameters for the model
   */
  async streamGenerate(
    modelId: string,
    prompt: string,
    onData: (data: StreamChunk) => void,
    onError: (error: Error | string | unknown) => void,
    onComplete: (data: StreamChunk) => void,
    params?: ModelParams,
  ): Promise<void> {
    if (!prompt?.trim()) {
      throw new Error("Prompt cannot be empty");
    }

    try {
      const queryParams: Record<string, string> = {
        t: prompt,
      };

      if (this.key) {
        queryParams.key = this.key;
      }

      if (params?.system) queryParams.system = params.system;
      if (params?.temperature !== undefined)
        queryParams.temperature = params.temperature.toString();
      if (params?.max_tokens !== undefined)
        queryParams.max_tokens = params.max_tokens.toString();
      if (params?.maxtokens !== undefined)
        queryParams.maxtokens = params.maxtokens.toString();
      if (params?.top_p !== undefined)
        queryParams.top_p = params.top_p.toString();
      if (params?.frequency_penalty !== undefined)
        queryParams.frequency_penalty = params.frequency_penalty.toString();
      if (params?.presence_penalty !== undefined)
        queryParams.presence_penalty = params.presence_penalty.toString();

      const queryString = Object.entries(queryParams)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
        )
        .join("&");

      const url = `${baseUrl}/ai/${modelId}/stream?${queryString}`;

      // Use event source for streaming
      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) => {
        try {
          const parsedData = JSON.parse(event.data) as StreamChunk;

          if (parsedData.error) {
            onError(parsedData.error);
            eventSource.close();
            return;
          }

          if (parsedData.done) {
            onComplete(parsedData);
            eventSource.close();
            return;
          }

          if (parsedData.content) {
            onData(parsedData);
          }
        } catch (error) {
          onError(error);
        }
      };

      eventSource.onerror = (error) => {
        onError(error);
        eventSource.close();
      };
    } catch (error) {
      onError(error);
    }
  }

  /**
   * Handle API errors in a consistent way
   * @private
   * @param error - Error from axios or other source
   */
  private handleApiError(error: unknown): never {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data?.why || error.message;
      throw new Error(errorMessage);
    }
    throw error;
  }
}

export const MODEL_ALIASES = {
  gpt4: "openai/gpt-4-turbo",
  gpt35: "openai/gpt-3.5-turbo",
  claude3: "anthropic/claude-3-opus",
  claude3s: "anthropic/claude-3-sonnet",
  claude3h: "anthropic/claude-3-haiku",
  mistral: "mistralai/mistral-7b-instruct",
  gemini: "google/gemini-pro",
  gemini2: "google/gemini-2.0-flash-exp:free",
  llama3: "meta-llama/llama-3-70b-instruct",
  mixtral: "mistralai/mixtral-8x7b-instruct",
  llamavision: "meta-llama/llama-3.2-11b-vision-instruct:free",
};

export const openRouter = new OpenErApi();

export async function getModels(): Promise<ModelsResponse> {
  return openRouter.getModels();
}

export async function checkModel(modelId: string): Promise<ModelInfo> {
  return openRouter.checkModel(modelId);
}

export async function chat(
  modelId: string,
  prompt: string,
  params?: ModelParams,
): Promise<ModelResponse> {
  return openRouter.chat(modelId, prompt, params);
}

export async function reasoning(
  modelId: string,
  prompt: string,
  params?: ModelParams,
): Promise<ModelResponse> {
  return openRouter.reasoning(modelId, prompt, params);
}

/**
 * Generate a response using the named model alias
 * @param alias - Model alias (e.g., "gpt4", "claude3")
 * @param prompt - The prompt to send to the model
 * @param params - Optional parameters for generation
 * @returns The model response
 */
export async function modelAlias(
  alias: string,
  prompt: string,
  params?: ModelParams,
): Promise<ModelResponse> {
  const modelId =
    (MODEL_ALIASES as Record<string, string>)[alias.toLowerCase()] || alias;
  return openRouter.chat(modelId, prompt, params);
}

export const gpt4 = (prompt: string, params?: ModelParams) =>
  modelAlias("gpt4", prompt, params);
export const gpt35 = (prompt: string, params?: ModelParams) =>
  modelAlias("gpt35", prompt, params);
export const claude3 = (prompt: string, params?: ModelParams) =>
  modelAlias("claude3", prompt, params);
export const claude3s = (prompt: string, params?: ModelParams) =>
  modelAlias("claude3s", prompt, params);
export const claude3h = (prompt: string, params?: ModelParams) =>
  modelAlias("claude3h", prompt, params);
export const mistral = (prompt: string, params?: ModelParams) =>
  modelAlias("mistral", prompt, params);
export const gemini = (prompt: string, params?: ModelParams) =>
  modelAlias("gemini", prompt, params);
export const gemini2 = (prompt: string, params?: ModelParams) =>
  modelAlias("gemini2", prompt, params);
export const llama3 = (prompt: string, params?: ModelParams) =>
  modelAlias("llama3", prompt, params);
export const mixtral = (prompt: string, params?: ModelParams) =>
  modelAlias("mixtral", prompt, params);
export const llamavision = (prompt: string, params?: ModelParams) =>
  modelAlias("llamavision", prompt, params);
