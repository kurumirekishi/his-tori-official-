import { FaTwitter, FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
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
                        <a href="https://open.spotify.com/intl-ja/artist/4BVOPQPMluSpx031xLtyN1?si=jsMPuVU8TIaxz-A6Y1u26g" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                            <FaSpotify />
                        </a>
                        <a href="https://music.apple.com/us/artist/his-tori-%E6%AD%B4%E5%8F%B2%E3%82%92%E4%BC%9D%E3%81%88%E3%82%8B%E9%B3%A5%E3%83%AD%E3%83%83%E3%82%AF%E3%83%90%E3%83%B3%E3%83%89/1831705010" target="_blank" rel="noopener noreferrer" aria-label="Apple Music">
                            <FaApple />
                        </a>
                        <a href="https://www.youtube.com/channel/UCiaWmERd0Y6dH9-6zBmPLJg" target="_blank" rel="noopener noreferrer" aria-label="YouTube Music">
                            <SiYoutubemusic />
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
