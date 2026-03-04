import { useTranslation } from 'react-i18next';
import MultiFilters from '../components/MultiFilters';
import Cta from '../components/Cta';


const OurProducts = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="our-products">

                <div className="container">
                    <h1>{t('ourProducts.title')}</h1>
                    <p>{t('ourProducts.description')}</p>
                </div>
                <MultiFilters />
                <Cta />
            </section>
        </>
    );
};

export default OurProducts;
