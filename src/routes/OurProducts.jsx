import { useTranslation } from 'react-i18next';
import MultiFilters from '../components/MultiFilters';
import Cta from '../components/Cta';
import about2 from "../assets/about2.jpg";
import HeaderImage from '../components/HeaderImage';
import '../App.css';

const OurProducts = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="our-products ">
                <HeaderImage src={about2} alt="train train" />
                <div className="container">




                    <div className="container-hero">
                        <div className="hero-text">

                            <h1>{t('ourProducts.title')}</h1>
                            <p>{t('ourProducts.description')}</p>
                        </div>
                    </div>
                </div>
                <MultiFilters />
                <Cta />
            </section>
        </>
    );
};

export default OurProducts;
