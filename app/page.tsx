import BentoGrid from "@/components/bentoGrid";
import EntryPage from "@/components/entry";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Quiz from "@/components/quiz";
import LenisProvider from "@/provider/lenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <EntryPage/>
      <Hero/>
      <BentoGrid/>
      <Products/>
      <Quiz/>
    </LenisProvider>
  );
}
