import About from '../AboutUs/about.jsx';
import OurTeam from '../AboutUs/ourteam.jsx';
import React, { useState, useEffect } from 'react';
import { getAllAboutUs } from '../../Services/AboutUsServices.jsx';

function AboutUs() {

    const [bG, setBG] = useState([]);

    useEffect(() => {
        const fetchBG = async () => {
            try {
                const response = await getAllAboutUs();
                const activeBG = response.data
                    .filter(item => item.id === 1);

                setBG(activeBG);
            } catch (error) {
                console.error('Failed to fetch background:', error);
            }
        };

        fetchBG();
    }, []);

    const isActive = bG.length > 0 && bG[0].display === 1;

    return (
        <div id='about-us'>
            <OurTeam />
            <div className={isActive ? 'block' : 'hidden'}>
                <About />
            </div>
        </div>
    );
}

export default AboutUs;