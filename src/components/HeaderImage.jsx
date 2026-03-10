
const HeaderImage = ({ src, alt, children }) => {
    return (
        <div
            className="parallax"
            style={{ backgroundImage: `url(${src})` }}
            role="img"
            aria-label={alt}
        >
            {/* Effet de parallaxe natif via CSS, image en background */}
            {children}
        </div>
    );
};

export default HeaderImage; 