
import { useTranslation } from 'react-i18next';

const Presentation = () => {
    const { t } = useTranslation();
    return (
        <section className="presentation" id="presentation">
            <div className="container">
                <div className="section-intro">
                    <h2>{t('presentation.title', 'Why choose')} <span>Sik-Holz?</span></h2>
                    <p>{t('presentation.intro', 'We combine nature, art, and safety in every playground structure.')}</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="icon">🪵</div>
                        <h3>{t('presentation.feature1.title', 'Natural Robinia Wood')}</h3>
                        <p>{t('presentation.feature1.desc', 'We use the most durable European wood, known for its natural resistance and unique shapes.')}</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon">🎨</div>
                        <h3>{t('presentation.feature2.title', 'Individual Design')}</h3>
                        <p>{t('presentation.feature2.desc', 'Every playground is a unique piece of art, designed to fit your specific landscape and needs.')}</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon">🛡️</div>
                        <h3>{t('presentation.feature3.title', 'Highest Safety')}</h3>
                        <p>{t('presentation.feature3.desc', 'Our structures meet all international safety standards while providing challenging play.')}</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon">🌲</div>
                        <h3>{t('presentation.feature4.title', 'Natural Robinia Wood')}</h3>
                        <p>{t('presentation.feature4.desc', 'We use the most durable European wood, known for its natural resistance and unique shapes.')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentation;    