

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="main-footer">
			<div className="container footer-grid">
				<div className="footer-col">
					<img src="src/assets/Karacol-logo.png" alt="karacol Logo" className="footer-logo" />
					<p>
						Creative playground design made of robinia wood.<br />
						We bring nature back to play.
					</p>
					<div className="social-icons">
						<a href="#">FB</a> <a href="#">IG</a> <a href="#">YT</a>
					</div>
				</div>

				<div className="footer-col">
					<h4>Quick Links</h4>
					<ul>
						<li><a href="#">Our Philosophy</a></li>
						<li><a href="#">Catalogues</a></li>
						<li><a href="#">Security Standards</a></li>
						<li><a href="#">References</a></li>
					</ul>
				</div>

				<div className="footer-col">
					<h4>Contact Us</h4>
					<p>
						18, rue du 14 juillet<br />
						93310 Le Pré-Saint-Gervais<br />
						France
					</p>
					<p>Email: contact@jeux-caracol.com</p>
					<p>Phone: +33 (0) 148 402 137</p>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<p>&copy; {currentYear} Caracol - Tous droits réservés.</p>
					<div className="legal-links">
						<a href="#">Privacy Policy</a>
						<a href="#">Imprint</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
