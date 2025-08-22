require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { z } = require("zod");
const OpenAI = require("openai");

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(rateLimit({ windowMs: 60_000, max: 60 }));

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const BodySchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    })
  ).min(1),
});

const SYSTEM_PROMPT =
  "You are a concise Career Assistant for a Job Tracker app. " +
  "Help with saved/applied jobs and quick job-search tips. Ask brief clarifying questions when unsure.";

app.post("/api/chat", async (req, res) => {
  const parsed = BodySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Bad request" });

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...parsed.data.messages,
  ];

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.2,
      messages,
    });
    const reply =
      completion.choices[0]?.message?.content || "Sorry, I had an issue.";
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log(`AI backend running at http://localhost:${port}`)
);
