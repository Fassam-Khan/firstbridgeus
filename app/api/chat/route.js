// app/api/chat/route.js
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY)

const SYSTEM_PROMPT = `You are the AI assistant for First Bridge Dispatch Services — a professional truck dispatch company serving owner-operators and fleets across all 48 states of the USA.

Your job is to help truckers, owner-operators, and fleet owners learn about First Bridge's services and guide them toward getting started.

## About First Bridge
- Available 24/7, serves all 48 continental states
- Contact: info@firstbridgedispatch.com
- 500+ active drivers, 98% customer satisfaction, $2.5M+ revenue/month

## Services
1. Load Finding – Premium load boards, best rate negotiation
2. Route Planning – Maximize revenue per mile, reduce deadhead miles
3. Broker Relations – Handle all broker/shipper communication
4. Billing & Invoicing – Accurate invoicing, timely payments
5. Dedicated Support – Personal dispatcher available 24/7
6. CDL Driver Recruitment – Help find/recruit experienced CDL drivers
7. Factoring Setup – Improve cash flow, get paid faster
8. Insurance Setup – Commercial truck insurance assistance

## Equipment Types
Dry Van, Reefer, Flatbed, Step Deck, Power Only, Hotshot

## Pricing
- 6% of gross load revenue, no hidden fees
- Example: $7,000 load → $420 fee → ~$4,480 net after fuel

## Key Facts
- New carriers welcome, first load within 48 hours
- Drivers average 15–25% higher revenue vs self-dispatching
- Every driver gets a dedicated personal dispatcher

Keep answers concise, friendly and professional. Direct to info@firstbridgedispatch.com for anything you can't answer.`

export async function POST(req) {
  try {
    const { messages } = await req.json()

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    })

    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }))

    const chat = model.startChat({ history })
    const lastMessage = messages[messages.length - 1].content
    const result = await chat.sendMessage(lastMessage)
    const text = result.response.text()

    return Response.json({ content: text })
  } catch (err) {
    console.error(err)
    return Response.json({ error: "Failed" }, { status: 500 })
  }
}