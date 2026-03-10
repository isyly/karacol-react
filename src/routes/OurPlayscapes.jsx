import { useTranslation } from 'react-i18next';
import about4 from "../assets/about4.jpg";
import HeaderImage from '../components/HeaderImage';
import '../App.css';
import Cta from '../components/Cta';

const OurPlayscapes = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="our-playscapes">
                <HeaderImage src={about4} alt="train train" />
                <div className="container-hero">
                    <div className="hero-text">

                        <h1>{t('ourPlayscapes.title')}</h1>
                        <p>{t('ourPlayscapes.description')}</p>
                    </div>
                </div>
                <Cta/>
            </section>
        </>
    );
};

export default OurPlayscapes;
