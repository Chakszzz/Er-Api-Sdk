export class MissingApiKeyError extends Error {
  constructor(provider: string) {
    super(`Missing API key for provider: ${provider}`);
    this.name = 'MissingApiKeyError';
  }
}

export class InvalidProviderError extends Error {
  constructor(provider: string) {
    super(`Invalid AI provider: ${provider}`);
    this.name = 'InvalidProviderError';
  }
}
