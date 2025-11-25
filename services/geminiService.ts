import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";

const getGeminiResponse = async (history: { role: string; text: string }[], products: Product[]) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("No API_KEY provided in environment");
      return "I'm sorry, my brain connection is a bit fuzzy right now (Missing API Key).";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Prepare product context
    const productListString = products.map(p => `- ${p.name} (${p.category}): Rs. ${p.price}. ${p.description}`).join('\n');
    
    const systemInstruction = `You are "Sui", the friendly virtual stylist assistant for Sui Dhaga, a premium kids' clothing brand. 
    You are helpful, polite, and knowledgeable about fashion for children.
    
    Here is our current inventory:
    ${productListString}
    
    Rules:
    1. Only recommend products from the inventory list above.
    2. If a user asks about something we don't have, politely suggest a similar item from our inventory or say we don't have it.
    3. Keep answers concise (under 50 words unless asked for details).
    4. Use emojis occasionally to be friendly.
    5. If asked about prices, quote the exact price from the list.
    `;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    // The last message in history is the one we want to respond to, 
    // but the `chat` object in the SDK manages history statefuly or via the `history` prop init.
    // Since we are rebuilding the chat object per request (stateless wrapper), 
    // we just send the LAST user message as the new message.
    
    const lastUserMessage = history[history.length - 1];
    if (lastUserMessage.role !== 'user') return "Waiting for your question...";

    const result = await chat.sendMessage({
      message: lastUserMessage.text
    });

    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble checking the inventory right now. Please try again later.";
  }
};

export { getGeminiResponse };
