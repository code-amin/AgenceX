import Header from "./Header";
import Hero from "./Hero";
// import Blog from "./Blog";
import Home from "./Home";
import Realizations from "./Realizations";
import Services from "./Services";
import Arguments from "./Arguments";
import Reviews from "./Reviews";
// import Process from "./Process";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";
import Socials from "./Socials";
import Thanks from "./Thanks";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // const [plan, setPlan] = useState("Besoin d'innovation...");

  // const handlePlanSelection = (price) => {
  //   setPlan(price);
  // };

  return (
    <Router>
      <div className="bg-[#2C3333] text-white px-[3vw]">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/thank-you" element={<Thanks />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
        <Socials />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
