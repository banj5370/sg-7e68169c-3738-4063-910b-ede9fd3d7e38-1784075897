import type { NextApiRequest, NextApiResponse } from "next";

const BOT_TOKEN = "8224547270:AAErTBN5Ym8IaZvfu_Gd7fA47Y2XAMjLIlY";
const CHAT_ID = "6978087373";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { action, message, data } = req.body;

    const text = `
<b>🔔 ${action}</b>

${message}
${data ? `\n<pre>${JSON.stringify(data, null, 2)}</pre>` : ""}
    `.trim();

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.description || "Telegram API error");
    }

    const result = await response.json();
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Telegram notification error:", error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}