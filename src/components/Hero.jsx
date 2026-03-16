
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="hero">
            <video
                className="hero-bg-video"
                autoPlay
                loop
                muted
                playsInline
                src="https://www.lappset.de/wp-content/uploads/2025/10/Prime-Landing-page-banner-video-compressed.mp4"
                type="video/mp4"
            />
            <div className="hero-overlay">
                <div className="container">
                    <div className="hero-text">
                        <h1>
                            {t('hero.title1', 'Les jeux, Grandeur Nature')} <br />
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