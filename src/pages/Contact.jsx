
import Map from "../components/Map";
import { useTranslation } from 'react-i18next';



const Contact = () => {
    const { t } = useTranslation();
    return (
        <section className="contact-page" id="contact">
            <div className="container contact-wrapper">
                <div className="contact-info ">
                    <h2>{t('contact.title1', 'Get in')} <span>{t('contact.title2', 'Touch')}</span></h2>
                    <p>{t('contact.intro', "Do you have a idea in mind? Let's build something great together.")}</p>

                    <div className="info-item">
                        <strong>{t('contact.address', 'Address')}:</strong>
                        <p>
                            18, rue du 14 juillet<br />
                            93310 Le Pré-Saint-Gervais<br />
                            France
                        </p>
                    </div>
                    <div className="info-item">
                        <strong>{t('contact.email', 'Email')}:</strong>
                        <p>contact@jeux-caracol.com</p>
                    </div>
                    <div className="map-placeholder" style={{ height: '300px', width: '100%' }}>
                        <Map center={[48.885, 2.404]} zoom={15} />
                    </div>
                </div>

                <div className="contact-form">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="name">{t('contact.fullName', 'Full Name')}</label>
                            <input type="text" id="name" name="name" placeholder={t('contact.placeholderName', 'John Doe')} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">{t('contact.emailAddress', 'Email Address')}</label>
                            <input type="email" id="email" name="email" placeholder={t('contact.placeholderEmail', 'john@example.com')} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">{t('contact.subject', 'Subject')}</label>
                            <select id="subject" name="subject">
                                <option value="quote">{t('contact.requestQuote', 'Request a Quote')}</option>
                                <option value="info">{t('contact.generalInfo', 'General Information')}</option>
                                <option value="support">{t('contact.technicalSupport', 'Technical Support')}</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">{t('contact.message', 'Message')}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder={t('contact.placeholderMessage', 'Tell us about your project...')}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            {t('contact.send', 'Send Message')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;