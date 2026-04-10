import Image from "next/image";
import Logo from "@/component/Logo";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Footer from "@/component/Footer";
import Iconsbox from "@/component/Iconsbox";
import Services from "@/component/Services";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero />
   <Iconsbox/>
   <Services/>
   <Footer/>
  
  
   </>
  );
}
