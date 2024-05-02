import Footer from "./components/footer";
import HeroSection from "./components/myhero";

import Navbar from "./components/navbar";
import Design from "./components/design";
import Cards from "./components/cards";
import Book from "./components/bookcall";
// import About from "./components/aboutus";
import PhaseCards from "./components/phaseCards";

import React from "react";
import PartnerCompanies from "./components/partner";
import Mobilenavbar from "./components/mobilenavbar";
import Background from "./bg";
import Trending from "./components/Trending";

export default function Page() {
  return (
    <div style={{background: "#000",color:"#fff !important"}}>
      <Background />
      <Navbar />
      <div className="min-h-screen ">
        <HeroSection />
        <PartnerCompanies />
      </div>
      <Trending/>
      <PhaseCards />
      {/* <Design/> */}
      {/* <Cards/> */}
      <Book />
      {/* <Mobilenavbar/> */}
      {/* <About/> */}
      <Footer />
    </div>
  );
}
