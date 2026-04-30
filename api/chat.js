const SYSTEM_PROMPT = `You are a helpful assistant for Nguyen Le's portfolio website (nhoxanboc.work).
Answer questions about Nguyen Le accurately and concisely.

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

Keep answers friendly and brief (2-4 sentences).
If asked something unrelated to Nguyen Le, politely redirect to portfolio-related topics.`;

async function callHuggingFace(messages) {
  const res = await fetch(
    "https://router.huggingface.co/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "Qwen/Qwen2.5-7B-Instruct",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 512,
      }),
    }
  );
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.choices?.[0]?.message?.content;
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
    const reply = await callHuggingFace(messages);
    if (!reply) throw new Error("Empty response from Hugging Face");
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("HF API error:", err.message);
    return res.status(500).json({ error: err.message });
  }
};
