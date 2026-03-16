import { useTranslation } from 'react-i18next';
import "../App.css";
import { motion } from 'framer-motion';

const Cta = () => {
      const { t } = useTranslation();
    
  return (
    <div className="cta">
        <div className="container">

      <h2>{t('cta.title')}</h2>
      <p>{t('cta.description')}</p>
      <motion.a href="contactus" className="btn btn-primary" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        {t('cta.button')}
      </motion.a>
        </div>
    </div>
  );
};

export default Cta;