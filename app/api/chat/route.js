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
        { content: "Missing GEMINI_API_KEY in environment variables." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const messages = body?.messages;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { content: "No valid messages received." },
        { status: 400 }
      );
    }

    // -----------------------------
    // 1. Convert to Gemini format
    // -----------------------------
    let history = messages.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content || "" }],
    }));

    // Remove empty messages
    history = history.filter((m) => m.parts[0].text.trim());

    // -----------------------------
    // 2. Ensure FIRST message is user
    // -----------------------------
    while (history.length && history[0].role !== "user") {
      history.shift();
    }

    // -----------------------------
    // 3. Prevent invalid role streaks
    // -----------------------------
    const cleanedHistory = [];
    for (const msg of history) {
      if (cleanedHistory.length === 0) {
        cleanedHistory.push(msg);
        continue;
      }

      const last = cleanedHistory[cleanedHistory.length - 1];

      if (last.role !== msg.role) {
        cleanedHistory.push(msg);
      }
    }

    // -----------------------------
    // 4. Get latest user message
    // -----------------------------
    const latestMessage = messages[messages.length - 1]?.content || "";

    if (!latestMessage.trim()) {
      return NextResponse.json(
        { content: "Empty message received." },
        { status: 400 }
      );
    }

    // -----------------------------
    // 5. Init Gemini
    // -----------------------------
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({
      history: cleanedHistory,
    });

    // -----------------------------
    // 6. Get response
    // -----------------------------
    const result = await chat.sendMessage(latestMessage);
    const aiText = result.response.text();

    return NextResponse.json({ content: aiText });

  } catch (error) {
    console.error("Gemini Route Error:", error);

    return NextResponse.json(
      {
        content: `Error: ${error?.message || "Something went wrong"}`,
      },
      { status: 500 }
    );
  }
}