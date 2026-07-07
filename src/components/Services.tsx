import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Info, Scale, MessageCircle } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Pengaduan Nasabah",
    description:
      "Ajukan keluhan atau pengaduan terkait layanan perbankan, transaksi, atau produk Nama Bank Anda secara online dengan proses yang transparan.",
  },
  {
    icon: Info,
    title: "Informasi Produk & Layanan",
    description:
      "Dapatkan informasi lengkap mengenai tabungan, deposito, kredit, e-banking, dan berbagai produk keuangan lainnya dari Nama Bank Anda.",
  },
  {
    icon: Scale,
    title: "Mediasi & Dispute",
    description:
      "Layanan penyelesaian sengketa perbankan melalui mediasi profesional sesuai ketentuan OJK dan peraturan perundangan yang berlaku.",
  },
  {
    icon: MessageCircle,
    title: "Konsultasi Keuangan",
    description:
      "Konsultasikan kebutuhan finansial Anda dengan tim ahli Nama Bank Anda untuk solusi perbankan yang paling sesuai dengan profil Anda.",
  },
];

export function Services() {
  return (
    <section id="layanan" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Layanan Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Berbagai layanan bantuan yang tersedia untuk nasabah{" "}
            <strong>Nama Bank Anda</strong> demi kenyamanan dan kepuasan Anda.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-heading text-lg">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}