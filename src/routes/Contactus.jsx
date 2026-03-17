import Contact from "../components/Contact";
import '../App.css';
import about1 from "../assets/about1.jpg";
import HeaderImage from "../components/HeaderImage";
import { useTranslation } from 'react-i18next';

function Contactus() {
  const { t } = useTranslation();
  return (

    <div className="App">
      <HeaderImage src={about1} alt="train train" />
        <div className="container">

        <div className="container-hero">
          <div className="hero-text">
            <h1>{t('contact.title1', 'Get in')} <span>{t('contact.title2', 'Touch')}</span></h1>
                              <p>{t('contact.intro', "Do you have a idea in mind? Let's build something great together.")}</p>

          </div>
        </div>
        </div>
      <Contact />
    </div>
  );
}

export default Contactus;