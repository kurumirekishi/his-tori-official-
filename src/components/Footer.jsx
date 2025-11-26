import { FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <h2>His-tori</h2>
                    <p>HISTORY × ROCK × AI</p>
                </div>

                <div className="footer-links">
                    <div className="social-links">
                        <a href="https://x.com/kurumirekishi" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://www.youtube.com/@His-tori-K" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                    </div>
                    <p className="contact-email">contact: (Place email here if available)</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} His-tori. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
