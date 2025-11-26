import React from 'react';
import './Members.css';

const Members = () => {
    const members = [
        {
            name: 'Narukami',
            role: 'Guitar / Vocal',
            image: '/members/narukami.png',
            description: 'The electrifying leader who commands the stage with thunderous riffs and powerful vocals.'
        },
        {
            name: 'Horus',
            role: 'Bass',
            image: '/members/horus.png',
            description: 'The stoic guardian of the low end, weaving complex basslines with ancient precision.'
        },
        {
            name: 'Shakoki',
            role: 'Drums',
            image: '/members/shakoki.jpg',
            description: 'The rhythmic heartbeat of the band, driving the music with primal energy and mystic beats.'
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
