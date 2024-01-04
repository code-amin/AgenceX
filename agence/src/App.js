import Header from "./Header";
import Hero from "./Hero";
import Blog from "./Blog";
import Realizations from "./Realizations";
import Services from "./Services";
import Arguments from "./Arguments";
import Reviews from "./Reviews";
import Process from "./Process";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";
import Socials from "./Socials";

const App = () => {

  return (
    <div className="bg-gray-900 text-white px-[3vw]">
      <Header />
      <Hero />
      <Realizations />
      <Services />
      <Arguments />
      <Reviews />
      <Process />
      <Pricing />
      <Contact />
      <Socials />
      <Footer />
      <Blog />
    </div>
  );
};

export default App;
