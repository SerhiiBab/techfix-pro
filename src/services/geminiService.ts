import { DiagnosisResult } from "../types";

export async function diagnoseDevice(
  deviceType: string,
  description: string,
  imageData?: string
): Promise<DiagnosisResult> {
  const res = await fetch("/api/diagnose", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deviceType, description, imageData }),
  });

  if (!res.ok) {
    throw new Error("Diagnosis failed");
  }

  return res.json();
}
