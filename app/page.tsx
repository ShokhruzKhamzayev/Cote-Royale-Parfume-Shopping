import EntryPage from "@/components/entry";
import Hero from "@/components/hero";
import LenisProvider from "@/provider/lenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <EntryPage/>
      <Hero/>
      <div className="h-screen"></div>
    </LenisProvider>
  );
}
