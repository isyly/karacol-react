
import { useRef, useEffect } from "react";

const Header = () => {
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

    return (
        <header className="main-header">
            <div className="container">
                <div className="logo">
                    <a href="index.html">
                        <img src="src/assets/karacol-logo.png" alt="Kara Logo" />
                    </a>
                </div>

                <nav className="navigation" ref={navigationRef}>
                    <ul>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#presentation">Individual Playgrounds</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <button className="menu-toggle" aria-label="Open menu" ref={menuToggleRef}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className="header-utils">
                    <a href="#" className="active">EN</a> | <a href="#">FR</a>
                </div>
            </div>
        </header>
    );
};

export default Header;