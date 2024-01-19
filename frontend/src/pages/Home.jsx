import React from "react";
import Hero from "../components/hero/Hero";
import Welcome from "../components/welcomeSection/Welcome";
import Testimonials from "../components/testimonials/Testimonials";
import Services from "../components/services/Services";
import OurMenu from "../components/ourMenu/OurMenu";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <Testimonials />
      <Services />
      <OurMenu />
      <Footer />
    </div>
  );
}

export default Home;
