import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PricingDomba from "@/components/PricingDomba";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import PricingSapi from "@/components/PricingSapi";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <PricingDomba/>
      <PricingSapi/>
      <FAQ/>
      <CallToAction/>
      <Gallery/>
      <Footer/>
    </>
  )
}
