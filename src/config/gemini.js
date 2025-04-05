import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

import fs from "node:fs";
import mime from "mime-types";

// Use only one declaration for apiKey
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

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


  
  if (result.response.candidates) {
      const candidates = result.response.candidates;
      for (let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
          for (let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
              const part = candidates[candidate_index].content.parts[part_index];
              if (part.inlineData) {
                  try {
                      const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
                      fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
                      console.log(`Output written to: ${filename}`);
                  } catch (err) {
                      console.error("File writing error:", err);
                  }
              }
          }
      }
  }

  console.log(response);

}

export default run

