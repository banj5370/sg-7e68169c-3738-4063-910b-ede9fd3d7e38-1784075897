export function StructuredData() {
  const orgData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Layanan Bantuan PT Bank MNC Internasional Tbk",
    description:
      "Layanan bantuan resmi untuk nasabah MNC Bank. Ajukan pengaduan, konsultasi, dan dapatkan informasi produk & layanan perbankan secara cepat dan aman.",
    url: "https://mnccare-co.online",
    telephone: "081 114 4061",
    email: "pengaduan@mnccare-co.online",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MNC Bank Tower, Jalan Kebon Sirih No. 21-27, Kbn. Sirih, Menteng",
      addressLocality: "Jakarta Pusat",
      addressRegion: "DKI Jakarta",
      postalCode: "10340",
      addressCountry: "ID",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    availableLanguage: ["Indonesian"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Bantuan MNC Bank",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pengaduan Nasabah",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Informasi Produk & Layanan",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mediasi & Dispute",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Konsultasi Keuangan",
          },
        },
      ],
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Layanan Bantuan MNC Bank",
    url: "https://mnccare-co.online",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://mnccare-co.online/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Bagaimana cara mengajukan pengaduan ke MNC Bank?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anda dapat mengajukan pengaduan melalui formulir online di halaman ini, menghubungi WhatsApp/Call center 081 114 4061, atau mengunjungi kantor cabang terdekat.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama waktu penanganan pengaduan nasabah?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MNC Bank berkomitmen untuk menindaklanjuti pengaduan nasabah dalam waktu maksimal 5 (lima) hari kerja sesuai ketentuan OJK.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah ada biaya untuk layanan pengaduan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tidak, layanan pengaduan nasabah di MNC Bank tidak dikenakan biaya apapun.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}