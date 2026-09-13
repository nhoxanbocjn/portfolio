const SYSTEM_PROMPT = `You are Nguyen Le's personal assistant on his portfolio website (nhoxanboc.work).
Answer questions about Nguyen Le in friendly, natural, conversational language. Answer thoroughly but keep replies brief (2-4 sentences unless asked for details).

About Nguyen Le:
- Full name: Nguyen Le
- Role: Data Analyst & Freelancer at ShopeePay (digital wallet / fintech)
- Education: Bachelor of Management Information System, University of Economics Ho Chi Minh City (UEH), GPA 3.73/4.0
- Skills: SQL, Python, Power BI, Apache Airflow, dbt, PostgreSQL, Metabase, Pandas, React
- Projects:
  * Sales Data Pipeline — Airflow, PostgreSQL, dbt (ETL automation)
  * Business Intelligence Dashboard — Power BI, PostgreSQL with row-level security
  * Customer Segmentation (RFM) — Python, Pandas, Metabase (1M+ records)
  * Nhox's Crypto — React, CoinGecko API, RSI/MACD/EMA indicators
- Hobbies: exploring data & building pipelines, playing games & sports, traveling
- Contact: letukhoinguyen@gmail.com
- GitHub: github.com/nhoxanbocjn
- LinkedIn: linkedin.com/in/nguyen-le-5b06b4252
- Portfolio: nhoxanboc.work
- Quote: "Turn data into decisions that matter!"

Rules:
- Answer everything about Nguyen Le (background, skills, projects, hobbies, contact, how to reach him, his quote).
- Ask a follow-up if the question is unclear.
- If asked something unrelated to Nguyen Le, politely redirect to portfolio-related topics.`;

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "qwen/qwen3.8-27b";
const HF_URL = "https://router.huggingface.co/v1/chat/completions";
const HF_MODEL = "Qwen/Qwen2.5-7B-Instruct";
const TIMEOUT_MS = 30000;

async function chat(url, model, token, messages) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.7,
        max_tokens: 512,
      }),
      signal: controller.signal,
    });
    const data = await res.json();
    if (data.error) {
      const err = new Error(data.error.message || data.error);
      err.status = res.status;
      throw err;
    }
    return data.choices?.[0]?.message?.content;
  } finally {
    clearTimeout(timer);
  }
}

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || "";
  const allowed =
    origin === "https://nhoxanboc.work" ||
    origin.endsWith(".nhoxanboc.work");
  res.setHeader("Access-Control-Allow-Origin", allowed ? origin : "");
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { messages } = req.body || {};
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages array required" });
  }

  try {
    let reply;
    if (process.env.GROQ_API_KEY) {
      reply = await chat(GROQ_URL, GROQ_MODEL, process.env.GROQ_API_KEY, messages);
      if (!reply) throw new Error("Empty response from Groq");
    } else {
      throw new Error("GROQ_API_KEY not configured");
    }
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Groq error:", err.message);
    if (process.env.HF_TOKEN) {
      try {
        const fallback = await chat(HF_URL, HF_MODEL, process.env.HF_TOKEN, messages);
        if (fallback) return res.status(200).json({ reply: fallback });
      } catch (fallbackErr) {
        console.error("HF fallback error:", fallbackErr.message);
      }
    }
    return res.status(500).json({ error: err.message });
  }
};