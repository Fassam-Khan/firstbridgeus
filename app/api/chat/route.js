export async function POST(req) {
    try {
      const { messages } = await req.json()
  
      // Convert messages to Gemini format
      const history = messages.slice(0, -1).map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }))
  
      const lastMessage = messages[messages.length - 1].content
  
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: {
              parts: [{
                text: `You are the AI assistant for First Bridge Dispatch Services — a professional truck dispatch company serving owner-operators and fleets across all 48 states of the USA.
  
  Your job is to help truckers, owner-operators, and fleet owners learn about First Bridge's services and guide them toward getting started.
  
  ## About First Bridge
  - Available 24/7, serves all 48 continental states
  - Contact: info@firstbridgedispatch.com
  - 500+ active drivers, 98% customer satisfaction, $2.5M+ revenue/month for drivers
  
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
  
  ## How It Works
  1. Submit MC Number → 2. Get assigned dispatcher → 3. Loads secured → 4. Drive & get paid
  
  ## Key Facts
  - New carriers welcome, first load within 48 hours
  - Drivers average 15–25% higher revenue vs self-dispatching
  - Every driver gets a dedicated personal dispatcher
  
  Keep answers concise, friendly, and professional. Direct to info@firstbridgedispatch.com for anything you can't answer.`
              }]
            },
            contents: [
              ...history,
              { role: "user", parts: [{ text: lastMessage }] }
            ],
            generationConfig: { maxOutputTokens: 1000 }
          }),
        }
      )
  
      const data = await response.json()
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text
  
      if (!text) throw new Error("No response")
  
      return Response.json({ content: text })
    } catch (err) {
      console.error(err)
      return Response.json({ error: "Failed" }, { status: 500 })
    }
  }