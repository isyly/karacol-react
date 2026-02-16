
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Products from "./pages/Products";
import RevealOnScroll from "./components/RevealOnScroll";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Hero />
      <Presentation />
      <Products />
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
      <Footer />
    </div>
  );
}

export default App;