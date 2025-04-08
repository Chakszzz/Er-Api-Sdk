# ER-API SDK

[![NPM Version](https://img.shields.io/npm/v/er-api-sdk.svg)](https://www.npmjs.com/package/er-api-sdk)
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9%2B-blue)](https://www.typescriptlang.org/)
[![Documentation](https://img.shields.io/badge/docs-TypeDoc-brightgreen)](https://ernewdev0.github.io/er-api-sdk/)

A Powerful TypeScript/JavaScript SDK for accessing [ER-API](https://er-api.biz.id) services, providing easy access to AI models, media downloads, games, and various other utilities.

## 📋 Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Features](#features)
- [API Reference](#api-reference)
  - [AI Services](#ai-services)
  - [Download Services](#download-services)
  - [Image Services](#image-services)
  - [Game Services](#game-services)
  - [Primbon Services](#primbon-services)
- [Configuration](#configuration)
- [Examples](#examples)
- [Documentation](#documentation)
- [License](#license)

## 📦 Installation

```bash
# Using npm
npm install er-api-sdk

# Using yarn
yarn add er-api-sdk

# Using pnpm
pnpm add er-api-sdk
```

## 🚀 Quick Start

```typescript
import { ErApiSdk } from 'er-api-sdk';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Or set API keys manually
ErApiSdk.setApiKey('deepseek', 'YOUR_DEEPSEEK_API_KEY');
ErApiSdk.setApiKey('openai', 'YOUR_OPENAI_API_KEY');

// Optional: Change the base URL if needed
// er.setBaseUrl('https://your-custom-api.example.com');

async function main() {
  try {
    // Generate AI responses
    const response = await ErApiSdk.deepseek('What is the capital of France?', 'deepseek-chat');
    console.log('AI Response:', response);
    
    // Generate images
    const imageBuffer = await ErApiSdk.brat('heello world');
    require('fs').writeFileSync('anime.jpg', imageBuffer);
    console.log('Image saved as anime.jpg');
    
    // Play games
    const wordGame = await ErApiSdk.tebakkata();
    console.log('Word Game:', wordGame);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## ✨ Features

- **Multiple AI Providers** - OpenAI, DeepSeek, Anthropic, Gemini, Mistral, and more
- **Media Downloads** - TikTok, Spotify, YouTube, and more
- **Image Generation** - Generated images from text
- **Games** - Word games, puzzles, quizzes
- **Traditional Fortune Telling** - Name meanings, lucky numbers

## 📚 API Reference

### AI Services

```typescript
// Using different AI providers
const deepseekResponse = await ErApiSdk.deepseek('Hello, who are you?', 'deepseek-chat');
const openaiResponse = await ErApiSdk.openai('What is the capital of France?', 'gpt-4o-mini');
const anthropicResponse = await ErApiSdk.anthropic('Tell me a joke', 'claude-3-haiku');
const geminiResponse = await ErApiSdk.gemini('Explain quantum computing', 'gemini-pro');

// ... other providers: cohere, mistral, perplexity, nlpc, groq, huggingface, together
```

### Download Services

```typescript
// Download TikTok video without watermark
const tiktok = await ErApiSdk.ttdl(tiktokUrl);

// Download Spotify track
const spotify = await ErApiSdk.spotify(spotifyUrl);
```

### Image Services

```typescript
// Get anime/image generation
const imageBuffer = await ErApiSdk.brat("halo dunia");

// Get waifu images
const waifu = await ErApiSdk.waifu("waifu");
```

### Game Services

```typescript
// Various Indonesian word games
const wordGame = await ErApiSdk.tebakkata();
const regionGame = await ErApiSdk.tebakkabupaten();
const brainTeaser = await ErApiSdk.asahotak();
const lyricsGame = await ErApiSdk.tebaklirik();
const familyGame = await ErApiSdk.family100();

// Other games available:
// caklontong, siapakahaku, susunkata, tebakbendera,
// tebakgambar, tebakkimia, tebaktebakan, tekateki,
// truth, dare
```

### Primbon Services

```typescript
// Get name meaning
const meaning = await ErApiSdk.artinama("John");

// Get lucky number
const luckyNumber = await ErApiSdk.nomorhoki(7);
```

## ⚙️ Configuration

### Using .env file (recommended)

Create a `.env` file in your project root:

```
OPENAI_API_KEY=your_openai_key
DEEPSEEK_API_KEY=your_deepseek_key
ANTHROPIC_API_KEY=your_anthropic_key
GEMINI_API_KEY=your_gemini_key
MISTRAL_API_KEY=your_mistral_key
PERPLEXITY_API_KEY=your_perplexity_key
COHERE_API_KEY=your_cohere_key
GROQ_API_KEY=your_groq_key
HF_API_KEY=your_huggingface_key
TOGETHER_API_KEY=your_together_key
NLPC_API_KEY=your_nlpc_key

# Base URL (optional)
ERAPI_BASE_URL=https://er-api.biz.id

# Custom endpoints (optional)
ERAPI_CUSTOM_ENDPOINT_WEATHER=/api/weather
```

### Custom Endpoints

You can register and use custom endpoints easily:

```typescript
// Register a custom endpoint
ErApiSdk.registerCustomEndpoint('weather', '/api/weather');

// Use the custom endpoint
const weatherData = await ErApiSdk.custom.weather({ city: 'Jakarta' });
console.log('Weather:', weatherData);

// You can also register endpoints via environment variables:
// ERAPI_CUSTOM_ENDPOINT_WEATHER=/api/weather
```

### Advanced Configuration

```typescript
// Set API keys
ErApiSdk.setApiKey('deepseek', 'YOUR_DEEPSEEK_KEY');

// Change base URL
ErApiSdk.setBaseUrl('https://your-custom-api.example.com');

// Get current base URL
const currentUrl = ErApiSdk.getBaseUrl();

// View all registered custom endpoints
const endpoints = ErApiSdk.getCustomEndpoints();
console.log('Custom endpoints:', endpoints);
```

## Error Handling

The SDK includes built-in error handling:

```typescript
try {
  const response = await ErApiSdk.deepseek('Hello world', 'deepseek-chat');
  console.log(response);
} catch (error) {
  console.error('Error details:', error);
  
  // The error object contains detailed information:
  // - status: HTTP status code
  // - error: Error message
  // - data: Server response (if available)
}
```

## 📖 Documentation

For detailed API documentation, visit our [Docs](https://erbots.github.io/er-api-sdk/).

## 📄 License

This project is licensed under the Unlicense - see the [LICENSE](https://github.com/ErBots/Er-Api-SDK) file for details.