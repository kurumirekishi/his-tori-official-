import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="container hero-content">
                <motion.div
                    className="hero-main-text"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h1 className="band-name">His-tori</h1>
                    <p className="band-concept">HISTORY × ROCK × AI</p>
                </motion.div>

                <motion.div
                    className="hero-vertical-text"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                >
                    <h2 className="tategaki">
                        <span>歌</span>
                        <span>は</span>
                        <span>、</span>
                        <br />
                        <span>歴</span>
                        <span>史</span>
                        <span>の</span>
                        <br />
                        <span>羽</span>
                        <span>ば</span>
                        <span>た</span>
                        <span>き</span>
                    </h2>
                </motion.div>
            </div>



            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span>SCROLL</span>
                <div className="line"></div>
            </motion.div>

            <motion.img
                src="/band-photo.png"
                alt="His-tori Band Members"
                className="hero-band-photo"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1.2 }}
            />
        </section>
    );
};

export default Hero;
