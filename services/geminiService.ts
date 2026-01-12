
import { GoogleGenAI, Type } from "@google/genai";
import { DiagnosisResult } from "../types";

const API_KEY = process.env.API_KEY || "";

export async function diagnoseDevice(deviceType: string, description: string, imageData?: string): Promise<DiagnosisResult> {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const prompt = `Du bist ein erfahrener Techniker in einem Reparaturzentrum. Ein Kunde beschreibt folgendes Problem mit seinem ${deviceType}: "${description}".
  Analysiere das Problem und gib eine Diagnose zurück. 
  WICHTIG: Antworte NUR im JSON-Format auf DEUTSCH.`;

  const contents: any = [{ text: prompt }];
  if (imageData) {
    contents.push({
      inlineData: {
        mimeType: "image/jpeg",
        data: imageData.split(',')[1] || imageData
      }
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: { parts: contents },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            possibleIssue: { type: Type.STRING, description: "Name des wahrscheinlichen Defekts" },
            description: { type: Type.STRING, description: "Detaillierte Erklärung des Problems" },
            estimatedCost: { type: Type.STRING, description: "Geschätzte Kostenspanne in Euro" },
            urgency: { type: Type.STRING, description: "Dringlichkeit: Niedrig, Mittel oder Hoch" },
            nextSteps: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Empfohlene nächste Schritte" 
            }
          },
          required: ["possibleIssue", "description", "estimatedCost", "urgency", "nextSteps"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return result as DiagnosisResult;
  } catch (error) {
    console.error("AI Diagnosis Error:", error);
    throw new Error("Fehler bei der KI-Analyse. Bitte versuchen Sie es später erneut.");
  }
}
