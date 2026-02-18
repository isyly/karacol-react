
import { useTranslation } from 'react-i18next';

const TopBar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="top-bar">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="top-bar-right">
                    <span>
                        {t('topbar.contact', 'Contact us by')} <a href="mailto:contact@karacol.com">email</a> {t('topbar.language', 'or by phone at')}: 01 48 40 21 37
                    </span>
                </div>
                {/* ...rien ici, les boutons de langue sont déplacés dans Header.jsx... */}
            </div>
        </div>
    );
};

export default TopBar;
