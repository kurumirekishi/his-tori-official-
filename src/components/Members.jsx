import React from 'react';
import './Members.css';

const Members = () => {
    const members = [
        {
            name: 'ナルカミ',
            role: 'Vo / Gt',
            image: '/members/narukami.png',
            description: '雷鳴の如き歌声で歴史を紡ぐフロントマン。'
        },
        {
            name: 'ホルス',
            role: 'Ba',
            image: '/members/horus.png',
            description: '天空の視点から重低音を支える守護者。'
        },
        {
            name: '遮光器インコ',
            role: 'Dr',
            image: '/members/shakoki.jpg',
            description: '古代の記憶をリズムに刻む土偶ドラマー。'
        }
    ];

    return (
        <section className="members-section" id="members">
            <div className="members-container">
                <h2 className="section-title">MEMBERS</h2>
                <div className="members-grid">
                    {members.map((member, index) => (
                        <div key={index} className="member-card">
                            <div className="member-image-container">
                                <img src={member.image} alt={member.name} className="member-image" />
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                                <p className="member-description">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Members;
