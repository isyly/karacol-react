

import KaracolLogo from '../assets/klogo.png';
import { useTranslation } from 'react-i18next';


const Footer = () => {
	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();
	return (
		<footer className="main-footer">
			<div className="container footer-grid">
				<div className="footer-col">
					<img src={KaracolLogo} alt="karacol Logo" className="footer-logo" />
					<p>
						{t('footer.slogan1', 'Creative playground design made of robinia wood.')}<br />
						{t('footer.slogan2', 'We bring nature back to play.')}
					</p>
					<div className="social-icons">
						<a href="#">FB</a> <a href="#">IG</a> <a href="#">YT</a>
					</div>
				</div>

				<div className="footer-col">
					<h4>{t('footer.quickLinks', 'Quick Links')}</h4>
					<ul>
						<li><a href="#">{t('footer.philosophy', 'Our Philosophy')}</a></li>
						<li><a href="https://www.richter-spielgeraete.de/en/catalogues/" target="_blank">{t('footer.catalogues', 'Catalogues')}</a></li>
						<li><a href="https://www.richter-spielgeraete.de/en/legal/legal-notice/">{t('footer.security', 'Security Standards')}</a></li>
						<li><a href="#">{t('footer.references', 'References')}</a></li>
					</ul>
				</div>

				<div className="footer-col">
					<h4>{t('footer.contact', 'Contact Us')}</h4>
					<p>
						18, rue du 14 juillet<br />
						93310 Le Pré-Saint-Gervais<br />
						France
					</p>
					<p>{t('footer.email', 'Email')}: contact@jeux-caracol.com</p>
					<p>{t('footer.phone', 'Phone')}: +33 (0) 148 402 137</p>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<p>&copy; {currentYear} Caracol - {t('footer.rights', 'Tous droits réservés.')}</p>
					<div className="legal-links">
						<a href="https://www.richter-spielgeraete.de/en/legal/privacy-policy/" target="_blank">{t('footer.privacy', 'Privacy Policy')}</a>
						<a href="https://www.richter-spielgeraete.de/en/legal/legal-notice/" target="_blank">{t('footer.imprint', 'Imprint')}</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
