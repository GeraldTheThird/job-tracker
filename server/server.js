// server/server.js
import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(express.json());
app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

// Initialize OpenAI
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages must be a non-empty array" });
    }

    // Call OpenAI with messages
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",  // light, fast model
      messages: messages,
    });

    const reply = completion.choices?.[0]?.message?.content || "Sorry, I had an issue.";
    res.json({ reply });
  } catch (err) {
    console.error("Error in /api/chat:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
