"use client"
import Footer from "./components/footer";
import HeroSection from "./components/myhero";
import Navbar from "./components/navbar";
import Design from "./components/design";
import Cards from "./components/cards";
import React from "react";
import PartnerCompanies from "./components/partner";

export default function Page() {
  return (
    <div>
      
        <Navbar />
        <div>
          <HeroSection />
          <PartnerCompanies />
        </div>
        <Design />
        <Cards />
        
        <Footer />
        
    </div>
  );
}
