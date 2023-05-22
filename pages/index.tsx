import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PricingDomba from "@/components/PricingDomba";
import Footer from "@/components/Footer";
import Example from "@/components/FAQ";
import PricingSapi from "@/components/PricingSapi";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <PricingDomba/>
      <PricingSapi/>
      <Example/>
      <CallToAction/>
      <Footer/>
    </>
  )
}
