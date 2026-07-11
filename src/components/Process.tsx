import { ClipboardList, Headphones, CheckCircle } from "lucide-react";

const steps = [
{
  number: "01",
  icon: ClipboardList,
  title: "Ajukan Pengaduan",
  description:
  "Isi formulir pengaduan online atau hubungi call center Nama Bank Anda. Sertakan detail lengkap keluhan Anda untuk penanganan yang lebih cepat."
},
{
  number: "02",
  icon: Headphones,
  title: "Verifikasi & Tindak Lanjut",
  description:
  "Tim layanan pelanggan kami akan memverifikasi dan menindaklanjuti pengaduan Anda dalam waktu 1x24 jam kerja sesuai SLA yang berlaku."
},
{
  number: "03",
  icon: CheckCircle,
  title: "Penyelesaian & Konfirmasi",
  description:
  "Dapatkan solusi dan konfirmasi penyelesaian pengaduan. Kami memastikan setiap nasabah Nama Bank Anda mendapatkan resolusi yang memuaskan."
}];


export function Process() {
  return (
    <section id="alur" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Alur Bantuan
          </h2>
          <p className="text-muted-foreground text-lg">
            Tiga langkah mudah untuk mendapatkan bantuan dari layanan
            customer service, <strong>PT Bank MNC Iternasional Tbk.</strong>
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-border" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) =>
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center">
              
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold text-accent mb-2">
                  Langkah {step.number}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">Dapatkan solusi dan konfirmasi penyelesaian pengaduan. Kami memastikan setiap nasabah MNC Bank mendapatkan resolusi yang memuaskan.

              </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}