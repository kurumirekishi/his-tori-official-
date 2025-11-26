import { motion } from 'framer-motion';
import './About.css';



const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    ABOUT
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="band-description"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <p>
                            「歌は、歴史の羽ばたき」
                        </p>
                        <p>
                            His-toriは、歴史の物語をロックサウンドに乗せ、<br />
                            AI技術を駆使して表現する<br />
                            新時代のバンドプロジェクト。
                        </p>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default About;
