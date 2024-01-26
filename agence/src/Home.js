import Hero from "./Hero";
import Realizations from "./Realizations";
import Services from "./Services";
import Arguments from "./Arguments";
import Reviews from "./Reviews";
// import Process from "./Process";
import Pricing from "./Pricing";
import Contact from "./Contact";

import { useState } from "react";

const Home = () => {
  const [plan, setPlan] = useState("Besoin d'innovation...");

  const handlePlanSelection = (price) => {
    setPlan(price);
  };
  return (
    <div>
      <Hero />
      <Realizations />
      <Services />
      <Arguments />
      <Reviews />
      {/* <Process /> */}
      <Pricing onSelectPlan={handlePlanSelection} plan={plan} />
      <Contact plan={plan} />
    </div>
  );
};

export default Home;
