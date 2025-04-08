import { er } from "./dist";

// Optional: Set API keys manually (kalau nggak pakai .env)
er.setApiKey("deepseek", "YOUR_DEEPSEEK_KEY");
er.setApiKey("openai", "YOUR_OPENAI_KEY");

// Optional: Ganti base URL kalau perlu
// er.setBaseUrl("https://er-api.biz.id");

async function main() {
  try {
    // Tes endpoint ai.deepseek
    const deepseekResult = await er.ai.deepseek(
      "Hello, who are you?",
      "deepseek-chat",
    );
    console.log("Deepseek Result:", deepseekResult);

    // Tes endpoint ai.openai
    const openaiResult = await er.ai.openai(
      "What is the capital of France?",
      "gpt-3.5-turbo",
    );
    console.log("OpenAI Result:", openaiResult);

    // Tes endpoint get.tebakkata (no parameter)
    const tebakkata = await er.get.tebakkata();
    console.log("Tebak Kata:", tebakkata);

    // Tes endpoint get.brat (return Buffer image)
    const imageBuffer = await er.get.brat("anime");
    require("fs").writeFileSync("anime.jpg", imageBuffer);
    console.log("Image saved as anime.jpg");
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
