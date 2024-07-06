import Navbar from './navbar.jsx';
import Carousel from './carousel.jsx';
import React, {useState, useEffect} from 'react';
import { getBG } from "../../Services/HomeServices.jsx";


function Home() {

    const [bG, setBG] = useState([]);

    useEffect(() => {
        const fetchBG = async () => {
            try {
                const response = await getBG();
                const activeBG = response.data
                    .filter(item => item.id === 1);

                setBG(activeBG);
            } catch (error) {
                console.error('Failed to fetch background:', error);
            }
        };

        fetchBG();
    }, []);

    const isActive = bG.length > 0 && bG[0].active === 1;

    return (
        <div id='home' className={isActive ? 'block': 'hidden'}>
            <Carousel />
        </div>
    );
}

export default Home;