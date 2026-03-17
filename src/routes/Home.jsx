

import Hero from "../components/Hero";
import AboutUs from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import TextLeftImageSection from "../components/TextLeftImageSection";  
import TextRightImageSection from "../components/TextRightImageSection";


function Home() {
  return (
    <div className="App">
      <Hero />
      <Products />
      <AboutUs />
      <TextLeftImageSection
        title="Un savoir-faire artisanal"
        text="Karacol conçoit et réalise des aires de jeux en bois naturel, alliant créativité, sécurité et respect de l’environnement."
        imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        imageAlt="Aire de jeux en bois naturel"
      />
      <TextRightImageSection
        title="Un savoir-faire artisanal"
        text="Karacol conçoit et réalise des aires de jeux en bois naturel, alliant créativité, sécurité et respect de l’environnement."
        imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        imageAlt="Aire de jeux en bois naturel"
      />
      <Contact />
    </div>
  );
}

export default Home;