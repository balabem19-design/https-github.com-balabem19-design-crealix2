import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: In a real production app, never expose API keys on the client.
// For this demo environment, we assume process.env.API_KEY is safe/injected.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateImage = async (prompt: string, aspectRatio: string = "16:9"): Promise<string | null> => {
  try {
    const model = 'gemini-2.5-flash-image'; 
    
    // We use generateContent with standard prompting for images on this model
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
           aspectRatio: aspectRatio as any // Casting to satisfy type if needed, strict types are '16:9' | '1:1' etc
        }
      }
    });

    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            }
        }
    }
    
    console.warn("No image data found in response for prompt:", prompt);
    return null;

  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};
