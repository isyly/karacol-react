
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import AboutUs from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";


function Home() {
  return (
    <div className="App">
      <Hero />
      <Presentation />
      <Products />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default Home;