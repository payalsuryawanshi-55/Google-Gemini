import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// import fs from "node:fs";
// import mime from "mime-types";

// Use only one declaration for apiKey
const apiKey = import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-pro-exp-03-25",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
      generationConfig,
      history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response.text();
  console.log(result.response.text())

  return response

}

export default run

