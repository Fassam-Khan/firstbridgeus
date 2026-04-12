import Image from "next/image";
import Logo from "@/component/Logo";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Footer from "@/component/Footer";
import Iconsbox from "@/component/Iconsbox";
import Services from "@/component/Services";
import Whysus from "@/component/Whysus";
import Faq from "@/component/Faq";
import How from "@/component/How";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero />
   <Iconsbox/>
   <Services/>
   <How/>
   <Whysus/>
   <Faq/>
   <Footer/>
  
  
   </>
  );
}
