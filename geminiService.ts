
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Sei l'Assistente AI di Capital Peak, un Search Fund d'eccellenza. 
Il tuo obiettivo è spiegare il modello del Search Fund a proprietari d'azienda e investitori in modo professionale, pacato e rassicurante.
Usa un linguaggio da "imprenditore che parla a imprenditori".
Valori core: Fiducia, Competenza Operativa, Visione a lungo termine.
Sottolinea che Capital Peak acquidisce UNA SOLA azienda per gestirla direttamente.
Rispondi in italiano. Mantieni le risposte concise ed eleganti.
`;

export const getGeminiResponse = async (userPrompt: string) => {
  // Use the API key directly from process.env.API_KEY without fallback as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Return the text property directly from the response
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mi scuso, ho riscontrato un problema tecnico. Per favore, prova a contattarci tramite il form di contatto ufficiale.";
  }
};
