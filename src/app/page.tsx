import TopAppBar from "@/components/landing/TopAppBar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <TopAppBar />
      <main className="grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
