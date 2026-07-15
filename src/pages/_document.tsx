import { cn } from "@/lib/utils";
import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <SEOElements />
        <meta name="google-site-verification" content="4yQ23jKen8hm8d_v7C8MptJlPtYbkv0KLpAQkKShFcI" />
        <link rel="canonical" href="https://mncbank.co.id/tentang-mnc-bank/kontak-kami/hubungi-kami" />
        <meta name="keywords" content="Layanan call center MNC Bank, Layanan pengaduan nasabah MNC Bank, customer service MNC Bank, kontak MNC Bank, pusat bantuan MNC Bank, WhatsApp MNC bank" />
        {/*
          CRITICAL: DO NOT REMOVE THIS SCRIPT
          The Softgen AI monitoring script is essential for core app functionality.
          The application will not function without it.
        */}
        <script
          src="https://cdn.softgen.ai/script.js"
          async
          data-softgen-monitoring="true"
        />
      </Head>
      <body
        className={cn(
          "min-h-screen w-full scroll-smooth bg-background text-foreground antialiased"
        )}
      >
        <Main />
        <NextScript />

        {/* Visual Editor Script */}
        {process.env.NODE_ENV === "development" && (
          <script
            src="https://cdn.softgen.dev/visual-editor.min.js"
            async
            data-softgen-visual-editor="true"
          />
        )}
      </body>
    </Html>
  );
}