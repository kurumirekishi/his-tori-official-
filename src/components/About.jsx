import { motion } from 'framer-motion';
import './About.css';

const members = [
    {
        name: 'ナルカミ',
        role: 'Vo / Gt',
        description: '雷鳴の如き歌声で歴史を紡ぐフロントマン。',
    },
    {
        name: 'ホルス',
        role: 'Ba',
        description: '天空の視点から重低音を支える守護者。',
    },
    {
        name: '遮光器インコ',
        role: 'Dr',
        description: '古代の記憶をリズムに刻む土偶ドラマー。',
    },
    {
        name: 'Kurumi',
        role: 'Producer',
        description: 'AIと歴史を融合させるクリエイター。',
    }
];

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

                    <div className="members-grid">
                        {members.map((member, index) => (
                            <motion.div
                                className="member-card"
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                                <p className="member-desc">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
