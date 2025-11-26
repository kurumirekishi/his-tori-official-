import { motion } from 'framer-motion';
import './Music.css';

const videos = [
    {
        id: 'GOLD - 狂気の太陽',
        title: 'GOLD - 狂気の太陽',
        url: 'https://www.youtube.com/embed/videoseries?list=PLU12uITxBEPGpE1iL8-Z3XlD9qG_1jX_1', // Playlist or specific video ID needed. 
        // Since I don't have specific video IDs, I'll use a placeholder or search query embed if possible, 
        // but standard embed requires ID. I will use the channel ID or a placeholder for now.
        // Actually, I can't get video IDs without API or manual check. 
        // I'll use a placeholder image that links to the channel for now, or generic embeds.
        // Wait, I can try to guess or just put a link.
        // Better: Use a "Latest Video" placeholder and a link to channel.
        // OR: Use the user provided URL to find IDs? No, I only have titles.
        // I will use a placeholder structure.
        videoId: 'placeholder'
    }
];

// Since I don't have exact video IDs, I will create a layout that encourages the user to fill them in,
// or just link to the channel for now with a nice UI.
// Actually, I'll make it a "Discography" style list that links to YouTube.

const tracks = [
    { title: "GOLD - 狂気の太陽", views: "241 views", date: "2 months ago" },
    { title: "The Caving Carnival", views: "195 views", date: "3 months ago" },
    { title: "矢が降る夜 — Arrows in the Dark", views: "169 views", date: "4 months ago" },
    { title: "祈りのあとさき", views: "142 views", date: "4 months ago" },
];

const Music = () => {
    return (
        <section id="music" className="music-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    MUSIC
                </motion.h2>

                <div className="music-content">
                    <div className="latest-video-container">
                        <h3 className="subsection-title">Latest Release</h3>
                        <div className="video-placeholder">
                            <div className="video-overlay">
                                <p>Check out the latest tracks on YouTube</p>
                                <a href="https://www.youtube.com/@His-tori-K" target="_blank" rel="noopener noreferrer" className="btn-gold">
                                    Visit Channel
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="track-list">
                        <h3 className="subsection-title">Popular Tracks</h3>
                        <div className="tracks-grid">
                            {tracks.map((track, index) => (
                                <motion.a
                                    href="https://www.youtube.com/@His-tori-K/videos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="track-card"
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="track-info">
                                        <h4>{track.title}</h4>
                                        <span className="track-meta">{track.date} • {track.views}</span>
                                    </div>
                                    <div className="play-icon">▶</div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Music;
