interface TelegramNotificationData {
  action: string;
  message: string;
  data?: Record<string, unknown>;
}

export async function sendTelegramNotification({
  action,
  message,
  data,
}: TelegramNotificationData): Promise<void> {
  try {
    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, message, data }),
    });

    if (!response.ok) {
      console.error("Failed to send Telegram notification");
    }
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
}