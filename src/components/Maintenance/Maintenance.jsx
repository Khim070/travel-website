import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

function Maintenance() {
    return (
        <div>
            <Player
                autoplay
                loop
                src="https://lottie.host/33520a0a-d87b-4e2a-93ec-c36977ce553a/2Ky9bwvaGS.json"
                style={{ height: 'auto', width: '55%' }}
            >
            </Player>
        </div>
    );
}

export default Maintenance;