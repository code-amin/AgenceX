import Header from "./Header";
import Hero from "./Hero";
// import Blog from "./Blog";
import Realizations from "./Realizations";
import Services from "./Services";
import Arguments from "./Arguments";
import Reviews from "./Reviews";
// import Process from "./Process";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";
import Socials from "./Socials";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [plan, setPlan] = useState("Besoin d'innovation...");

  const handlePlanSelection = (price) => {
    setPlan(price);
  };

  return (
    <Router>
      <div className="bg-gray-900 text-white px-[3vw]">
        <Header />
        <Hero />
        <Realizations />
        <Services />
        <Arguments />
        <Reviews />
        {/* <Process /> */}
        <Pricing onSelectPlan={handlePlanSelection} plan={plan} />
        <Contact plan={plan} />
        <Socials />
        <Footer />
        {/* <Blog /> */}
      </div>
    </Router>
  );
};

export default App;
