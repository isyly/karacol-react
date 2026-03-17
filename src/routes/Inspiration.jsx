import { useTranslation } from 'react-i18next';
import '../App.css';
import HeaderImage from '../components/HeaderImage';
import about4 from "../assets/about4.jpg";
import TextLeftImageSection from "../components/TextLeftImageSection";
import TextRightImageSection from "../components/TextRightImageSection";

const Inspiration = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="inspiration">
                <HeaderImage src={about4} alt="train train" />
                <div className="container">

                <div className="container-hero">
                    <div className="hero-text">

                        <h1>{t('inspiration.title')}</h1>
                        <p>{t('inspiration.description')}</p>
                    </div>
                </div>
                </div>

                <TextRightImageSection
                    title={t('inspiration.title')}
                    text={t('inspiration.description')}
                    imageSrc={about4}
                    imageAlt="train train"
                />
                <TextLeftImageSection
                    title={t('inspiration.title')}
                    text={t('inspiration.description')}
                    imageSrc={about4}
                    imageAlt="train train"
                />
            </section>
        </>
    );
};

export default Inspiration;
