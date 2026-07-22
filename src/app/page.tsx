import TopAppBar from "@/components/TopAppBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

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
