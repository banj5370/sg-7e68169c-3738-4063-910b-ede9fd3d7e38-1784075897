interface TelegramNotification {
  action: string;
  message: string;
  data?: Record<string, unknown>;
  timestamp?: string;
  page?: string;
  userAgent?: string;
}

export async function sendTelegramNotification({
  action,
  message,
  data,
  timestamp = new Date().toISOString(),
  page = typeof window !== "undefined" ? window.location.href : "",
  userAgent = typeof window !== "undefined" ? navigator.userAgent : "",
}: TelegramNotification): Promise<boolean> {
  try {
    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action,
        message,
        data,
        timestamp,
        page,
        userAgent,
      }),
    });

    if (!response.ok) {
      console.error("Failed to send Telegram notification:", await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
    return false;
  }
}