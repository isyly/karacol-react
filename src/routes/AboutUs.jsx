import About from "../components/About";
import Cta from "../components/Cta";
import '../App.css';
import about3 from "../assets/about3.jpg";
import HeaderImage from "../components/HeaderImage";
import { useTranslation } from 'react-i18next';

function AboutUs() {
      const { t } = useTranslation();
  
  return (
    <div className="App">
      <HeaderImage src={about3} alt="train train"  />
             <div className="container-hero">
                    <div className="hero-text">

                        <h1>{t('aboutUs.title')}</h1>
                        <p>{t('aboutUs.description')}</p>
                    </div>
                </div>
      <About />
      <Cta />
    </div>
  );
}

export default AboutUs; 