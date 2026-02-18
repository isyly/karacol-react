
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="hero">
            <div className="hero-overlay">
                <div className="container">
                    <div className="hero-text">
                        <h1>
                            {t('hero.title1', 'Playground equipment')} <br />
                            <span>{t('hero.title2', 'made of robinia wood')}</span>
                        </h1>
                        <p>{t('hero.subtitle', 'Individual, artistic, and natural play spaces for children of all ages.')}</p>
                        <div className="hero-actions">
                            <a href="#" className="btn btn-primary">{t('hero.products', 'Our Products')}</a>
                            <a href="#" className="btn btn-outline">{t('hero.inspiration', 'Inspiration')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;    