# ER-API SDK

[![NPM Version](https://img.shields.io/npm/v/er-api-sdk.svg)](https://www.npmjs.com/package/er-api-sdk)
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9%2B-blue)](https://www.typescriptlang.org/)
[![Documentation](https://img.shields.io/badge/docs-TypeDoc-brightgreen)](https://ErBots.github.io/Er-Api-Sdk/)
[![ER API](https://img.shields.io/badge/Er--API-RestApi-%23ffaa00)](https://er-api.biz.id)

A TypeScript/JavaScript SDK for the [ER-API](https://er-api.biz.id) platform, providing easy access to AI models, media downloads, image generation, games, and other utilities.

[![NPM](https://nodei.co/npm/er-api-sdk.png)](https://npmjs.org/package/er-api-sdk)

## Installation

```bash
npm install er-api-sdk   # npm
yarn add er-api-sdk      # yarn
pnpm add er-api-sdk      # pnpm
```

## Quick Start

```typescript
import { ErApiSdk } from "er-api-sdk";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Option 1: Initialize with environment variables
const sdk = ErApiSdk.fromEnv();

// Option 2: Set API keys directly
ErApiSdk.openRouter.setApiKey("YOUR_OPENROUTER_API_KEY");

async function main() {
  try {
    // Chat with AI models
    const aiResponse = await sdk.gpt4("What is the capital of France?");
    console.log("AI Response:", aiResponse);

    // Generate an image
    const imageBuffer = await ErApiSdk.brat("a colorful landscape");
    require("fs").writeFileSync("image.jpg", imageBuffer);

    // Download TikTok video
    const tiktok = await ErApiSdk.ttdl(
      "https://www.tiktok.com/@user/video/12345",
    );
    console.log("TikTok download:", tiktok);

    // Play a word game
    const wordGame = await ErApiSdk.tebakkata();
    console.log("Word Game:", wordGame);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
```

## Main Features

### AI Services

```typescript
// Initialize from environment variables (recommended)
const sdk = ErApiSdk.fromEnv();

// Use model aliases for convenience
const response = await sdk.gpt4("Your prompt here");
const claude = await sdk.claude3("Tell me a story");

// Direct model access with options
const customResponse = await sdk.chat("openai/gpt-4-turbo", "Hello world", {
  temperature: 0.7,
  max_tokens: 500,
});

// Available model aliases:
// gpt4, gpt35, claude3, claude3s, claude3h, mistral, gemini,
// gemini2, llama3, mixtral, llamavision
```

> **Note:** Direct access to individual AI providers (like `ErApiSdk.deepseek()`, `ErApiSdk.openai()`, etc.) has been deprecated in favor of the unified OpenRouter interface shown above.

### Media Downloads

```typescript
// Download videos/audio from various platforms
const tiktok = await ErApiSdk.ttdl("https://www.tiktok.com/@user/video/12345");
const spotify = await ErApiSdk.spotify("https://open.spotify.com/track/...");
const mp3 = await ErApiSdk.ermp3("https://youtube.com/watch?v=xxxx");
const mp4 = await ErApiSdk.ermp4("https://youtube.com/watch?v=xxxx");
```

### Image Generation

```typescript
// Generate images from text descriptions
const imageBuffer = await ErApiSdk.brat("anime girl with blue hair");
const text2imgBuffer = await ErApiSdk.text2img("Your text here");
```

### Games & Entertainment

```typescript
// Indonesian word games
const wordGame = await ErApiSdk.tebakkata();
const familyGame = await ErApiSdk.family100();
const truthGame = await ErApiSdk.truth();
const dareGame = await ErApiSdk.dare();

// Many more games available - see documentation
```

### Custom Endpoints

```typescript
// Register and use custom endpoints
ErApiSdk.registerCustomEndpoint("weather", "/api/weather");
const weather = await ErApiSdk.custom.weather({ city: "Jakarta" });
```

## Configuration

### Using Environment Variables

The SDK can load all API keys from environment variables with the `fromEnv()` method:

```typescript
// Create an SDK instance with environment variables
const sdk = ErApiSdk.fromEnv();

// This loads the following environment variables:
// - OPENROUTER_API_KEY: For OpenRouter access (required for custom params)
// - ERAPI_BASE_URL: Optional custom API base URL
// - ERAPI_CUSTOM_ENDPOINT_*: For custom endpoints (optional)
```

This approach is recommended for production use as it keeps your API keys secure and separate from your code.

### Using .env File

```
# AI API Keys
OPENROUTER_API_KEY=your_openrouter_key

# Custom endpoints (optional)
ERAPI_CUSTOM_ENDPOINT_WEATHER=/api/weather

# Base URL (optional)
ERAPI_BASE_URL=https://er-api.biz.id
```

### Manual Configuration

```typescript
// Set API key
ErApiSdk.openRouter.setApiKey("YOUR_API_KEY");

// Change base URL
ErApiSdk.setBaseUrl("https://your-custom-api.example.com");
```

## Error Handling

```typescript
try {
  const response = await ErApiSdk.gpt4("Hello world");
  console.log(response);
} catch (error) {
  if (error.name === "MissingApiKeyError") {
    console.error("API key not provided");
  } else {
    console.error("Error:", error.message);
  }
}
```

## Documentation

For detailed API documentation, visit our [TypeDoc Documentation](https://erbots.github.io/Er-Api-Sdk/).

## License

This project is licensed under the Unlicense - see the [LICENSE](https://github.com/ErBots/Er-Api-SDK) file for details.
