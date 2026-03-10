import { useTranslation } from 'react-i18next';
import "../App.css";

const Cta = () => {
      const { t } = useTranslation();
    
  return (
    <div className="cta">
        <div className="container">

      <h2>{t('cta.title')}</h2>
      <p>{t('cta.description')}</p>
      <a href="contactus" className="btn btn-primary  ">{t('cta.button')}</a>
        </div>
    </div>
  );
};

export default Cta;