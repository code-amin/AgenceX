import Header from "./Header";
import Hero from "./Hero";
import Blog from "./Blog";
import Realizations from "./Realizations";
import Services from "./Services";
import Arguments from "./Arguments";
import Reviews from "./Reviews";
import Process from "./Process";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Socials from "./Socials";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Realizations />
      <Services />
      <Arguments />
      <Reviews />
      <Process />
      <Pricing />
      <Footer />
      <Socials />
      <Blog />
    </>
  );
};

export default App;
