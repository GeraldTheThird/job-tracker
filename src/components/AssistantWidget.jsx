// 1. Imports at the very top
import React, { useState } from "react";

export default function AssistantWidget() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I’m your Career Assistant. Ask me about saved jobs, applications, or interview tips." }
  ]);
  const [input, setInput] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next })
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Network error. Try again." }]);
    }
  }

  return (
    <div style={{
      position: "fixed", right: 16, bottom: 16, width: 340, height: 460,
      display: "flex", flexDirection: "column", background: "#fff",
      border: "1px solid #e5e7eb", borderRadius: 12,
      boxShadow: "0 10px 30px rgba(0,0,0,.15)", overflow: "hidden", zIndex: 1000
    }}>
      <div style={{ padding: 12, borderBottom: "1px solid #eee", fontWeight: 600 }}>
        Career Assistant
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: 12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 8, textAlign: m.role === "user" ? "right" : "left" }}>
            <div style={{
              display: "inline-block", maxWidth: "85%",
              background: m.role === "user" ? "#e8f0fe" : "#f6f6f6",
              padding: "8px 10px", borderRadius: 10, whiteSpace: "pre-wrap", fontSize: 14
            }}>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} style={{ display: "flex", gap: 8, padding: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., Show applied jobs"
          style={{ flex: 1, border: "1px solid #ddd", borderRadius: 8, padding: "10px 12px" }}
        />
        <button type="submit" style={{ padding: "10px 14px", borderRadius: 8, background: "#111827", color: "#fff" }}>
          Send
        </button>
      </form>
    </div>
  );
}
