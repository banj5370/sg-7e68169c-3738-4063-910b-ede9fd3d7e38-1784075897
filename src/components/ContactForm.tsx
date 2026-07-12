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
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                            Gangguan E-Banking / M-Banking
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
                    <Phone className="h-5 w-5" />
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
                    <Mail className="h-5 w-5" />
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