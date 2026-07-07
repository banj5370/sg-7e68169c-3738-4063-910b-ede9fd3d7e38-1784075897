import Link from "next/link";
import { Shield, ExternalLink } from "lucide-react";

const footerLinks = {
  layanan: [
    { label: "Pengaduan Nasabah", href: "#kontak" },
    { label: "Informasi Produk", href: "#layanan" },
    { label: "Mediasi & Dispute", href: "#layanan" },
    { label: "Konsultasi Keuangan", href: "#layanan" },
  ],
  bantuan: [
    { label: "FAQ", href: "#faq" },
    { label: "Alur Bantuan", href: "#alur" },
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
  ],
  kontak: [
    { label: "Call Center: 1500XXX", href: "tel:1500XXX" },
    { label: "Email Pengaduan", href: "mailto:pengaduan@namabankanda.co.id" },
    { label: "Kantor Cabang", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-heading font-bold leading-tight text-foreground">
                  Layanan Bantuan
                </span>
                <span className="text-[10px] font-medium leading-tight text-muted-foreground">
                  Nama Bank Anda
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Layanan bantuan resmi untuk nasabah{" "}
              <strong>Nama Bank Anda</strong>. Komitmen kami adalah memberikan
              pelayanan terbaik dan solusi tepat untuk setiap keluhan nasabah.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Bantuan
            </h4>
            <ul className="space-y-3">
              {footerLinks.bantuan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-3">
              {footerLinks.kontak.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Nama Bank Anda. Hak Cipta Dilindungi.
            Terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK) & Bank Indonesia.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Syarat Penggunaan
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}