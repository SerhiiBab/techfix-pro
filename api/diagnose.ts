import { GoogleGenAI, Type } from "@google/genai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const ai = new GoogleGenAI({
  apiKey: process.env.API_KEY!,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { deviceType, description, imageData } = req.body;

    const prompt = `Du bist ein erfahrener Techniker.
Ein Kunde beschreibt folgendes Problem mit seinem ${deviceType}:
"${description}"

Antworte NUR im JSON-Format auf DEUTSCH.`;

    const parts: any[] = [{ text: prompt }];

    if (imageData) {
      parts.push({
        inlineData: {
          mimeType: "image/jpeg",
          data: imageData.split(",")[1],
        },
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: { parts },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            possibleIssue: { type: Type.STRING },
            description: { type: Type.STRING },
            estimatedCost: { type: Type.STRING },
            urgency: { type: Type.STRING },
            nextSteps: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: [
            "possibleIssue",
            "description",
            "estimatedCost",
            "urgency",
            "nextSteps",
          ],
        },
      },
    });

    res.status(200).json(JSON.parse(response.text || "{}"));
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "AI error" });
  }
}
