import { useTranslation } from 'react-i18next';


const OurPlayscapes = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="our-playscapes">
                <div className="container">
                    <h1>{t('ourPlayscapes.title')}</h1>
                    <p>{t('ourPlayscapes.description')}</p>
                    <p>Our Playscapes</p>
                </div>
            </section>
        </>
    );
};

export default OurPlayscapes;
