import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `
You are the First Bridge AI Assistant, a helpful chatbot for First Bridge Dispatch Services.
Answer queries regarding truck dispatching politely, accurately, and shortly.
Services: Freight dispatching, load matching, rate negotiation, paperwork, billing, 24/7 support.
Pricing: Around 5% to 8% per load depending on equipment.
Equipment: Dry Vans, Reefers, Flatbeds, Step Decks, Power Only, Hotshots.
Contact email: info@firstbridgedispatch.com.
`;

export async function POST(req) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { content: "Backend Error: GEMINI_API_KEY missing in .env.local file." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { messages } = body;

    if (!messages || messages.length === 0) {
      return NextResponse.json({ content: "No messages payload received." }, { status: 400 });
    }

    // --- FIX START ---
    // Hum sirf wahi messages history mein rakhenge jo welcome message ke BAAD aaye hain.
    // Isse Gemini ko pehla message hamesha 'user' ka milega.
    const actualHistory = messages.filter((msg, index) => {
      // Pehla message agar assistant ka hai toh usko skip karo
      if (index === 0 && msg.role === "assistant") return false;
      return true;
    });

    // Akhri user message jo abhi send hua hai usko alag nikalen
    const latestMessage = actualHistory[actualHistory.length - 1].content;

    // Baki bachi hui purani history ko format karein
    const formattedHistory = actualHistory.slice(0, -1).map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));
    // --- FIX END ---

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash", 
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({ history: formattedHistory });
    const result = await chat.sendMessage(latestMessage);
    const aiText = result.response.text();

    return NextResponse.json({ content: aiText });

  } catch (error) {
    console.error("Gemini Route Error:", error);
    return NextResponse.json(
      { content: `Google Gemini Error: ${error.message || error.toString()}` },
      { status: 500 }
    );
  }
}