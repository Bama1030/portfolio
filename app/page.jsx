"use client"

import About from "@/components/About";
import Cta from "@/components/Cta";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";
import Work from "@/components/Work";
import Hero from "@/components/ui/Hero";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
