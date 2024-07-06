import React, { useState, useEffect } from 'react';
import { getBG } from "../../Services/HomeServices.jsx";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);
    const [bG, setBG] = useState([]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 2000);

        return () => clearInterval(interval);
    }, [images]);

    useEffect(() => {
        const fetchBG = async () => {
            try {
                const response = await getBG();
                const activeBG = response.data
                    .filter(item => item.id === 1);

                const imageUrls = activeBG[0].bgImage.split('/').map(imageName => `http://localhost:8080/image/${imageName}`);
                setImages(imageUrls);
                setBG(activeBG);
            } catch (error) {
                console.error('Failed to fetch background:', error);
            }
        };

        fetchBG();
    }, []);

    return (
        <div>
            {bG.map((item, i) => (
                <div className="relative w-full z-0 overflow-hidden">
                    <div className="w-full flex-shrink-0 relative">
                        <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images.map((image, i) => (
                                <div key={i} className="w-full flex-shrink-0">
                                    <img
                                        src={image}
                                        alt={`Slide ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="absolute font-serif font-bold italic left-16 top-1/2 text-white text-2xl md:text-8xl font transform -translate-y-1/2 p-2">
                            <h1 className='w-20'>{item.mainTitle}</h1>
                        </span>
                        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Carousel;