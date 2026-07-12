import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bagaimana cara mengajukan pengaduan ke MNC Bank?",
    answer:
      "Anda dapat mengajukan pengaduan melalui formulir online di halaman ini, menghubungi Whatsapp/Call center 081 114 4061, atau mengunjungi kantor cabang terdekat. Pastikan menyertakan nomor rekening, detail transaksi, dan bukti pendukung untuk mempercepat proses penanganan.",
  },
  {
    question: "Berapa lama waktu penanganan pengaduan nasabah?",
    answer:
      "MNC Bank berkomitmen untuk menindaklanjuti pengaduan nasabah dalam waktu maksimal 5 (lima) hari kerja sesuai ketentuan OJK. Pengaduan yang kompleks mungkin memerlukan waktu lebih lama, namun Anda akan menerima update status secara berkala.",
  },
  {
    question: "Apa saja jenis pengaduan yang bisa disampaikan?",
    answer:
      "Nasabah dapat mengajukan pengaduan terkait: transaksi yang tidak sesuai, Kartu Kredit, gangguan layanan e-banking/m-banking, layanan teller atau customer service, penagihan yang dirasa mengganggu, serta keluhan terkait produk dan layana perbankan lainnya.",
  },
  {
    question: "Bagaimana jika pengaduan tidak terselesaikan?",
    answer:
      "Jika pengaduan belum terselesaikan hingga 20 hari kerja, Anda dapat mengajukan keberatan atau melaporkan ke Otoritas Jasa Keuangan (OJK) melalui Layanan Pengaduan Konsumen Sektor Jasa Keuangan di 157. MNC Bank tetap akan berupaya menyelesaikan hingga tuntas.",
  },
  {
    question: "Apakah data pengaduan nasabah dijamin kerahasiaannya?",
    answer:
      "Ya, MNC Bank menjamin kerahasiaan data dan identitas nasabah yang mengajukan pengaduan sesuai dengan ketentuan Undang-Undang Perlindungan Data Pribadi (UU PDP) dan kebijakan internal bank. Data hanya digunakan untuk keperluan penanganan pengaduan.",
  },
  {
    question: "Bagaimana cara cek status pengaduan yang sudah diajukan?",
    answer:
      "Anda dapat mengecek status pengaduan melalui nomor tiket yang diberikan saat pengaduan diajukan. Hubungi WhatsApp/call center 081 114 4061 atau kirimkan email ke pengaduan@mncbank.co.id dengan mencantumkan nomor tiket pengaduan Anda.",
  },
  {
    question: "Apakah ada biaya untuk layanan pengaduan?",
    answer:
      "Tidak, layanan pengaduan nasabah di MNC Bank tidak dikenakan biaya apapun. Ini adalah komitmen kami untuk memberikan pelayanan terbaik kepada setiap nasabah.",
  },
  {
    question: "Jam operasional layanan bantuan MNC Bank?",
    answer:
      "Call center dan layanan chatbot kami tersedia 24 jam sehari, 7 hari seminggu. Untuk layanan pengaduan melalui formulir online, Anda dapat mengajukan kapan saja dan akan ditindaklanjuti pada jam kerja hari berikutnya.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-muted-foreground text-lg">
            Temukan jawaban atas pertanyaan umum terkait layanan bantuan{" "}
            <strong MNC Bank</strong>.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/60">
              <AccordionTrigger className="text-left font-heading text-base font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}