import { useTranslation } from 'react-i18next';
import '../App.css';
import HeaderImage from '../components/HeaderImage';
import about4 from "../assets/about4.jpg";

const Inspiration = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="inspiration">
                <HeaderImage src={about4} alt="train train" />
                <div className="container">
                    <h1>{t('inspiration.title')}</h1>
                    <p>{t('inspiration.description')}</p>
                </div>
            </section>
        </>
    );
};

export default Inspiration;
