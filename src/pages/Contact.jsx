import Map from "../components/Map";


const Contact = () => {
    return (
        <section className="contact-page" id="contact">
            <div className="container contact-wrapper">
                <div className="contact-info ">
                    <h2>Get in <span>Touch</span></h2>
                    <p>Do you have a idea in mind? Let's build something great together.</p>

                    <div className="info-item">
                        <strong>Address:</strong>
                        <p>
                            18, rue du 14 juillet<br />
                            93310 Le Pré-Saint-Gervais<br />
                            France
                        </p>
                    </div>
                    <div className="info-item">
                        <strong>Email:</strong>
                        <p>contact@jeux-caracol.com</p>
                    </div>
                    <div className="map-placeholder" style={{ height: '300px', width: '100%' }}>
                        <Map center={[48.885, 2.404]} zoom={15} />
                        

                    </div>
                </div>

                <div className="contact-form">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject" name="subject">
                                <option value="quote">Request a Quote</option>
                                <option value="info">General Information</option>
                                <option value="support">Technical Support</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell us about your project..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;