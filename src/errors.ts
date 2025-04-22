export class MissingApiKeyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MissingApiKeyError';
  }
}

export class InvalidProviderError extends Error {
  constructor(provider: string) {
    super(`Invalid AI provider: ${provider}`);
    this.name = 'InvalidProviderError';
  }
}
