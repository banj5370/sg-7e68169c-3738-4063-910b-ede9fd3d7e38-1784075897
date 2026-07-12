---
title: Telegram Webhook Notifikasi Real-Time
status: in_progress
priority: high
type: feature
tags: [webhook, telegram, notifications, api]
created_by: agent
created_at: 2026-07-12T20:42:00Z
position: 2
---

## Notes
Membuat sistem notifikasi real-time ke Telegram Bot untuk setiap aksi di website layanan bantuan bank.

## Checklist
- [ ] Buat API route `/api/telegram` untuk mengirim pesan ke Telegram Bot API
- [ ] Buat helper function untuk mengirim notifikasi Telegram
- [ ] Integrasi notifikasi saat formulir pengaduan dikirim (ContactForm)
- [ ] Integrasi notifikasi saat tombol CTA diklik (Hero, Navbar)
- [ ] Integrasi notifikasi saat WhatsApp diklik
- [ ] Tambahkan environment variables untuk TELEGRAM_BOT_TOKEN dan TELEGRAM_CHAT_ID

## Acceptance
1. Setiap kali formulir pengaduan dikirim, notifikasi muncul di Telegram
2. Setiap kali tombol CTA penting diklik, notifikasi muncul di Telegram
3. Pesan Telegram berisi informasi detail (jenis aksi, waktu, data yang dimasukkan)