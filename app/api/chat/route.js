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
    // 1. Check if Key exists
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      alert("Not found")
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

    // 2. Gemini Structure Format
    const formattedHistory = messages.slice(0, -1).map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const latestMessage = messages[messages.length - 1].content;

    // 3. Initialize Gemini (Using stable production model)
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash", 
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({
      history: [
        // Ensure only valid alternate user/model turns are here
        { role: 'user', parts: [{ text: 'Hello!' }] },
        { role: 'model', parts: [{ text: 'Hi there! How can I assist you?' }] },
      ],
    });
    const result = await chat.sendMessage(latestMessage);
    const aiText = result.response.text();

    return NextResponse.json({ content: aiText });

  } catch (error) {
    console.error("Gemini Route Error:", error);
    // Yeh line browser ke chat container me error text bejhegi takay pata chale exact masla kya hai
    return NextResponse.json(
      { content: `Google Gemini Error: ${error.message || error.toString()}` },
      { status: 500 }
    );
  }
}