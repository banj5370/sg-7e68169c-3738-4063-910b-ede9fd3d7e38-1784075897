import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Clock, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Shield className="h-3.5 w-3.5" />
            Layanan Resmi PT Bank MNC Internasional Tbk
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Layanan Bantuan{" "}
            <span className="text-primary">Nama Bank Anda</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Solusi cepat dan terpercaya untuk pengaduan, konsultasi, dan
            informasi layanan perbankan. Tim kami siap membantu nasabah{" "}
            <strong>Nama Bank Anda</strong> 24 jam setiap hari.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
            >
              <Link href="#kontak">
                Ajukan Pengaduan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/20 text-primary hover:bg-primary/5 font-semibold px-8"
            >
              <Link href="#layanan">Lihat Layanan</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <span>Layanan 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-accent" />
              <span>Respons Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              <span>Terjamin Keamanan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}