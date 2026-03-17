import About from "../components/About";
import Presentation from "../components/Presentation";
import Cta from "../components/Cta";
import '../App.css';
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import equipe from "../assets/equipe_Karacol-2000x296.png";
import HeaderImage from "../components/HeaderImage";
import { useTranslation } from 'react-i18next';
import FullImage from "../components/FullImage";
import YoutubeVideo from "../components/YoutubeVideo";
import TextLeftImageSection from "../components/TextLeftImageSection";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <HeaderImage src={about3} alt="train train" />
        <div className="container">
      <div className="container-hero">

          <div className="hero-text">

            <h1>{t('aboutUs.title')}</h1>
            <p>{t('aboutUs.description')}</p>
          </div>
        </div>
      </div>
      <YoutubeVideo videoId="nD1K8I157jU" />
      <About />
      <Presentation />
      <FullImage imageSrc={equipe} imageAlt="equipe_Karacol-2000x296.png" />
      <TextLeftImageSection
        title={t('aboutUs.title01')}
        text={t('aboutUs.description01')}
        imageSrc={about4}
        imageAlt="about4"
      />

      <Cta />
    </div>
  );
}

export default AboutUs; 