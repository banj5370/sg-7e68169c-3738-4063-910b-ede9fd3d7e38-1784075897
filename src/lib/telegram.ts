interface TelegramNotificationData {
  action: string;
  message: string;
  data?: Record<string, unknown>;
}

export async function sendTelegramNotification({
  action,
  message,
  data,
}: TelegramNotificationData): Promise<boolean> {
  try {
    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, message, data }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to send Telegram notification:", errorText);
      return false;
    }

    const result = await response.json();
    console.log("Telegram notification sent:", result);
    return true;
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
    return false;
  }
}