"use client"
import { useState, useRef, useEffect } from "react"

const suggestedQuestions = [
  "What services do you offer?",
  "How much do you charge?",
  "Can you help new carriers?",
  "What equipment do you dispatch?",
  "How do I get started?",
]

export default function FirstBridgeChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey! 👋 I'm the First Bridge AI assistant. I can help you learn about our dispatch services, pricing, and how to get started. What's on your mind?",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [messages, open])

  const sendMessage = async (text) => {
    const userText = text || input.trim()
    if (!userText || loading) return

    setInput("")
    setShowSuggestions(false)
    const newMessages = [...messages, { role: "user", content: userText }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await response.json()
      const reply = data.content || "Sorry, I couldn't get a response. Please try again or email info@firstbridgedispatch.com"
      setMessages([...newMessages, { role: "assistant", content: reply }])
    } catch (err) {
      setMessages([...newMessages, {
        role: "assistant",
        content: "Something went wrong. Please email us at info@firstbridgedispatch.com and we'll get back to you right away!",
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');

        .fb-chat-root * { box-sizing: border-box; font-family: 'Barlow', sans-serif; }

        .fb-bubble {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e8a020, #c4730a);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(232,160,32,0.5);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .fb-bubble:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(232,160,32,0.65);
        }
        .fb-bubble svg { width: 28px; height: 28px; }

        .fb-window {
          position: fixed;
          bottom: 100px;
          right: 28px;
          z-index: 9998;
          width: 380px;
          max-height: 580px;
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
          background: #0f1117;
          border: 1px solid rgba(232,160,32,0.25);
          animation: fb-slideup 0.25s ease;
        }
        @keyframes fb-slideup {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .fb-header {
          background: linear-gradient(135deg, #1a1d27, #141720);
          border-bottom: 2px solid #e8a020;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .fb-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e8a020, #c4730a);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .fb-header-text h3 {
          margin: 0;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }
        .fb-header-text p {
          margin: 2px 0 0;
          color: #e8a020;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
        .fb-close {
          margin-left: auto;
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: color 0.15s, background 0.15s;
          display: flex;
        }
        .fb-close:hover { color: #fff; background: rgba(255,255,255,0.08); }

        .fb-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          scrollbar-width: thin;
          scrollbar-color: #2a2d3a transparent;
        }
        .fb-messages::-webkit-scrollbar { width: 4px; }
        .fb-messages::-webkit-scrollbar-thumb { background: #2a2d3a; border-radius: 4px; }

        .fb-msg {
          display: flex;
          flex-direction: column;
          max-width: 85%;
          gap: 4px;
        }
        .fb-msg.user { align-self: flex-end; align-items: flex-end; }
        .fb-msg.assistant { align-self: flex-start; align-items: flex-start; }

        .fb-bubble-msg {
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 13.5px;
          line-height: 1.55;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .fb-msg.user .fb-bubble-msg {
          background: linear-gradient(135deg, #e8a020, #c4730a);
          color: #fff;
          border-bottom-right-radius: 4px;
        }
        .fb-msg.assistant .fb-bubble-msg {
          background: #1e2130;
          color: #e8eaf0;
          border: 1px solid rgba(255,255,255,0.07);
          border-bottom-left-radius: 4px;
        }

        .fb-typing {
          display: flex;
          gap: 5px;
          align-items: center;
          padding: 12px 14px;
          background: #1e2130;
          border-radius: 14px;
          border-bottom-left-radius: 4px;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .fb-typing span {
          width: 7px; height: 7px;
          background: #e8a020;
          border-radius: 50%;
          animation: fb-bounce 1.2s infinite;
        }
        .fb-typing span:nth-child(2) { animation-delay: 0.2s; }
        .fb-typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes fb-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-5px); opacity: 1; }
        }

        .fb-suggestions {
          padding: 0 14px 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .fb-suggestion {
          background: rgba(232,160,32,0.1);
          border: 1px solid rgba(232,160,32,0.35);
          color: #e8a020;
          border-radius: 20px;
          padding: 5px 11px;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          font-family: 'Barlow', sans-serif;
        }
        .fb-suggestion:hover {
          background: rgba(232,160,32,0.22);
          color: #ffbe45;
        }

        .fb-input-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          padding: 12px 14px;
          background: #13161f;
          border-top: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .fb-input {
          flex: 1;
          background: #1e2130;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 10px 12px;
          color: #fff;
          font-size: 13.5px;
          font-family: 'Barlow', sans-serif;
          resize: none;
          outline: none;
          max-height: 100px;
          line-height: 1.4;
          transition: border-color 0.15s;
        }
        .fb-input::placeholder { color: #555; }
        .fb-input:focus { border-color: rgba(232,160,32,0.5); }

        .fb-send {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #e8a020, #c4730a);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: opacity 0.15s, transform 0.15s;
        }
        .fb-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
        .fb-send:not(:disabled):hover { transform: scale(1.05); }
        .fb-send svg { width: 18px; height: 18px; color: #fff; }

        .fb-footer {
          text-align: center;
          padding: 6px 14px 10px;
          font-size: 10.5px;
          color: #444;
          background: #13161f;
        }
        .fb-footer a { color: #666; text-decoration: none; }
        .fb-footer a:hover { color: #e8a020; }

        @media (max-width: 440px) {
          .fb-window {
            right: 12px;
            left: 12px;
            width: auto;
            bottom: 90px;
          }
          .fb-bubble { right: 16px; bottom: 20px; }
        }
      `}</style>

      <div className="fb-chat-root">
        {open && (
          <div className="fb-window">
            <div className="fb-header">
              <div className="fb-avatar">🚛</div>
              <div className="fb-header-text">
                <h3>First Bridge Assistant</h3>
                <p>● Online — 24/7 Support</p>
              </div>
              <button className="fb-close" onClick={() => setOpen(false)} aria-label="Close chat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div className="fb-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`fb-msg ${msg.role}`}>
                  <div className="fb-bubble-msg">{msg.content}</div>
                </div>
              ))}
              {loading && (
                <div className="fb-msg assistant">
                  <div className="fb-typing">
                    <span /><span /><span />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {showSuggestions && (
              <div className="fb-suggestions">
                {suggestedQuestions.map((q) => (
                  <button key={q} className="fb-suggestion" onClick={() => sendMessage(q)}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="fb-input-row">
              <textarea
                ref={inputRef}
                className="fb-input"
                rows={1}
                placeholder="Ask about services, pricing..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                disabled={loading}
              />
              <button
                className="fb-send"
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </div>

            <div className="fb-footer">
              Powered by AI · <a href="mailto:info@firstbridgedispatch.com">info@firstbridgedispatch.com</a>
            </div>
          </div>
        )}

        <button
          className="fb-bubble"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open chat"
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          )}
        </button>
      </div>
    </>
  )
}