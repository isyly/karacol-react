
import Hero from "../components/Hero";
import AboutUs from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";


function Home() {
  return (
    <div className="App">
      <Hero />
      <Products />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default Home;