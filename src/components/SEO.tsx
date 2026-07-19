import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

// SEO elements that can be used in _document.tsx (returns JSX without Head wrapper)
export function SEOElements({
  title = "Layanan Pengaduan dan Pusat Informasi Nasabah PT Bank MNC Internasional Tbk - Customer Service 24 Jam - Bantuan Cepat & Terpercaya",
  description = "Layanan bantuan resmi untuk nasabah MNC Bank. Ajukan pengaduan, konsultasi, dan dapatkan informasi produk & layanan perbankan secara cepat dan aman.",
  image = "https://mnccare-co.online/og-image.png",
  url = "https://mnccare-co.online",
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

// SEO component for use in pages/_app.tsx or individual pages (uses next/head)
// Note: Flattened structure (no fragment) for better Next.js Head compatibility during hot reload
export function SEO({
  title = "Layanan Pengaduan dan Pusat Informasi Nasabah PT Bank MNC Internasional Tbk - Customer Service 24 Jam - Bantuan Cepat & Terpercaya",
  description = "Layanan bantuan resmi untuk nasabah MNC Bank. Ajukan pengaduan, konsultasi, dan dapatkan informasi produk & layanan perbankan secara cepat dan aman.",
  image = "https://mnccare-co.online/og-image.png",
  url = "https://mnccare-co.online",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}