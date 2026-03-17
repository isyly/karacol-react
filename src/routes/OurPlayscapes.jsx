import { useTranslation } from 'react-i18next';
import about4 from "../assets/about4.jpg";
import HeaderImage from '../components/HeaderImage';
import '../App.css';
import Cta from '../components/Cta';
import TextRightImageSection from '../components/TextRightImageSection';
import TextLeftImageSection from '../components/TextLeftImageSection';

const OurPlayscapes = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="our-playscapes">
                <HeaderImage src={about4} alt="train train" />
                <div className="container">

                <div className="container-hero">
                    <div className="hero-text">

                        <h1>{t('ourPlayscapes.title')}</h1>
                        <p>{t('ourPlayscapes.description')}</p>
                    </div>
                </div>
                </div>
                <TextRightImageSection
                    title={t('ourPlayscapes.sectionTitle')}
                    text={t('ourPlayscapes.sectionText')}
                    imageSrc={about4}
                    imageAlt="train train"
                />
                <TextLeftImageSection
                    title={t('ourPlayscapes.sectionTitle2')}
                    text={t('ourPlayscapes.sectionText2')}
                    imageSrc={about4}
                    imageAlt="train train"
                />
                                <TextRightImageSection
                    title={t('ourPlayscapes.sectionTitle')}
                    text={t('ourPlayscapes.sectionText')}
                    imageSrc={about4}
                    imageAlt="train train"
                />

                <Cta/>
            </section>
        </>
    );
};

export default OurPlayscapes;
