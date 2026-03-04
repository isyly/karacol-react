
import { useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';
import KaracolLogo from '../assets/klogo.png';

const Navbar = () => {
    const menuToggleRef = useRef(null);
    const navigationRef = useRef(null);

    useEffect(() => {
        const menuToggle = menuToggleRef.current;
        const navigation = navigationRef.current;
        if (!menuToggle || !navigation) return;

        const handleToggle = () => {
            navigation.classList.toggle("active");
            menuToggle.classList.toggle("is-active");
            document.body.classList.toggle("no-scroll");
        };

        const handleLinkClick = (e) => {
            // Ferme le menu uniquement si le menu est ouvert (mobile)
            if (navigation.classList.contains("active")) {
                navigation.classList.remove("active");
                menuToggle.classList.remove("is-active");
                document.body.classList.remove("no-scroll");
            }
        };

        menuToggle.addEventListener("click", handleToggle);
        // Ajoute l'écouteur sur tous les liens du menu
        const links = navigation.querySelectorAll("a");
        links.forEach(link => link.addEventListener("click", handleLinkClick));

        return () => {
            menuToggle.removeEventListener("click", handleToggle);
            links.forEach(link => link.removeEventListener("click", handleLinkClick));
            document.body.classList.remove("no-scroll");
        };
    }, []);

    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="main-navbar ">
            <div className="container">

                <div className="logo">
                    <NavLink to="/">
                        <img src={KaracolLogo} alt="Kara Logo" />
                    </NavLink>
                </div>
                <nav className="navigation" ref={navigationRef}>
                    <ul>
                        <li><NavLink to="/ourproducts">{i18n.t('navbar.products')}</NavLink></li>
                        <li><NavLink to="/ourplayscapes">{i18n.t('navbar.playgrounds')}</NavLink></li>
                        <li><NavLink to="/aboutus">{i18n.t('navbar.about')}</NavLink></li>
                        <li><NavLink to="/inspiration">{i18n.t('navbar.inspiration')}</NavLink></li>
                        <li><NavLink to="/contactus">{i18n.t('navbar.contact')}</NavLink></li>
                    </ul>
                </nav>
                <button className="menu-toggle" aria-label="Open menu" ref={menuToggleRef}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className="navbar-utils">
                    <button
                        onClick={() => changeLanguage('en')}
                        className={currentLang === 'en' ? 'active' : ''}
                        style={{ marginRight: 4, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}
                        aria-label="English"
                    >🇬🇧</button>
                    |
                    <button
                        onClick={() => changeLanguage('fr')}
                        className={currentLang === 'fr' ? 'active' : ''}
                        style={{ marginLeft: 4, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}
                        aria-label="Français"
                    >🇫🇷</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;