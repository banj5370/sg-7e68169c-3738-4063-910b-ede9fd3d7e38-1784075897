import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <SEO />
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}