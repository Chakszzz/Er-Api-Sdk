# ER-API SDK

[![NPM Version](https://img.shields.io/npm/v/er-api-sdk.svg)](https://www.npmjs.com/package/er-api-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9%2B-blue)](https://www.typescriptlang.org/)
[![Documentation](https://img.shields.io/badge/docs-TypeDoc-brightgreen)](https://Er-Api-Sdk.js.org/)

A lightweight TypeScript/JavaScript SDK for accessing AI models, media downloads, image generation, games, and utilities through the [ER-API](https://er-api.biz.id) platform.

## Installation

```bash
npm install er-api-sdk   # npm
yarn add er-api-sdk      # yarn
pnpm add er-api-sdk      # pnpm
```

## Key Features

- **AI Models**: Easy access to various AI models (Gemini 2.0, Claude, Mistral, etc.)
- **Media Downloads**: Download videos/audio from TikTok, Spotify, YouTube, etc.
- **Image Generation**: Create images from text prompts
- **Games & Entertainment**: Access word games and other interactive content
- **Utilities**: Various helper functions and tools

## Usage Examples

### Basic Usage (No API Key Required)

Many endpoints work without an API key:

```javascript
// CommonJS
const { ttdl, text2img, tebakkata } = require('er-api-sdk');

// ESM
// import { ttdl, text2img, tebakkata } from 'er-api-sdk';

// Download TikTok video
const tiktokData = await ttdl('https://www.tiktok.com/@user/video/12345');

// Generate an image from text
const imageBuffer = await text2img('beautiful mountain landscape');

// Play a word game
const game = await tebakkata();
```

### Using AI Models (API Key Optional)

Basic AI requests work without an API key, but custom parameters require one:

```javascript
// CommonJS
const { deepseek, llama3, deepcoder } = require('er-api-sdk');

// ESM
// import { deepseek, llama3, deepcoder } from 'er-api-sdk';

// Basic AI requests (no API key needed)
const response = await deepseek('Explain quantum computing');
const code = await deepcoder('Write a function to sort an array in JavaScript');

// For custom parameters, you need an API key:
const { ErApiSdk } = require('er-api-sdk');
ErApiSdk.openRouter.setApiKey('YOUR_API_KEY');

const customResponse = await llama3('Tell me about space exploration', {
  temperature: 0.7,
  max_tokens: 500
});
```

### With Environment Variables

The recommended way to use API keys is through environment variables:

```javascript
// Set in .env file:
// OPENROUTER_API_KEY=your_api_key_here

// In your code:
const { ErApiSdk } = require('er-api-sdk');
const sdk = ErApiSdk.fromEnv();

// Now you can use advanced features
const response = await sdk.llama3('Explain quantum computing', {
  temperature: 0.8,
  max_tokens: 1000
});
```

### Media Downloads

```javascript
const { ermp3, ermp4, spotify } = require('er-api-sdk');

// Download YouTube audio
const audioData = await ermp3('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

// Download YouTube video
const videoData = await ermp4('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

// Download from Spotify
const spotifyData = await spotify('https://open.spotify.com/track/...');
```

### Image Generation

```javascript
const { brat, text2img } = require('er-api-sdk');

// Generate an image with Brat AI
const bratImage = await brat('hello world');

// Create a text-to-image
const textImage = await text2img('mountain landscape');
```

### Games & Entertainment

```javascript
const { family100, truth, dare, tebakkata } = require('er-api-sdk');

// Family 100 game
const familyGame = await family100();

// Truth or Dare
const truthQuestion = await truth();
const dareChallenge = await dare();

// Word guessing game
const wordGame = await tebakkata();
```

## API Key

To use AI models with custom parameters, you need an API key from [ER-API Platform](https://platform.er-api.biz.id).

**Setting your API key:**

1. **Environment variable** (recommended):
   ```
   OPENROUTER_API_KEY=your_api_key_here
   ```

2. **Direct in code:**
   ```javascript
   const { ErApiSdk } = require('er-api-sdk');
   ErApiSdk.openRouter.setApiKey('YOUR_API_KEY');
   ```

## Documentation

For detailed API documentation, visit our [Documentation](https://Er-Api-Sdk.js.org/).
