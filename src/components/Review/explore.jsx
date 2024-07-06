import { useEffect, useState } from 'react';
import { getHeaderPopular, getAllCard } from '../../Services/ReviewServices.jsx';
import { useNavigate } from 'react-router-dom';

function Explore() {

    const [card, setCard] = useState([]);
    const [explorer, setExplorer] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHeaderExplorer = async () => {
            try {
                const response = await getHeaderPopular();
                const activePopular = response.data
                    .filter(item => item.id === 2);

                setExplorer(activePopular);
                console.log(activePopular);
            } catch (error) {
                console.error('Failed to fetch explorer:', error);
            }
        };

        fetchHeaderExplorer();
    }, []);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const response = await getAllCard();
                const activeCard = response.data
                    .filter(item => item.active === 1 && item.display === 1)
                    .sort((a, b) => a.orderId - b.orderId);

                setCard(activeCard);

            } catch (error) {
                console.error('Failed to fetch explorer:', error);
            }
        };

        fetchCard();
    }, []);

    const handleSignIn = () => {
        navigate('/maintenance');
    }

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const images = [bg1, bg2, bg3];

    // const handlePrev = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // };

    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleNext();
    //     }, 8000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className=" top-0 px-4 py-6 flex justify-between w-full">
            {explorer.map((item, i) => (
            <div className='h-auto gap-x-6 gap-y-8  md:mt-10 w-full' key={i}>
                <div className="ml-1 md:mx-10 h-auto w-auto">
                    <div className="flex flex-col">
                        <span style={{ color: `#${item.color}` }} className="font-nunito text-6xl">{item.title}</span>
                        <div className="text-6xl font-nunito font-semibold mt-5">
                            <h1>{item.tag}</h1>
                        </div>
                    </div>
                    <div className="py-6 w-full">
                        <div className="grid lg:grid-cols-3 gap-10">
                            {card.map((item, i) => (
                                <div className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                                    <a>
                                        <img src={`http://localhost:8080/image/${item.cardImage}`} className="overflow-hidden rounded-t-lg h-dvh w-full" alt="" />
                                    </a>
                                    <div className='px-5 pb-5'>
                                        <a href="/" className='flex justify-between'>
                                            <h5 className='text-2xl font-bold tracking-tight text-gray-900'>{item.name}</h5>
                                            <p
                                                class="flex items-center gap-1.5 font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                    class="-mt-0.5 h-5 w-5 text-yellow-500">
                                                    <path fill-rule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clip-rule="evenodd">
                                                    </path>
                                                </svg>
                                                {item.rate}
                                            </p>
                                        </a>
                                        <div className='flex items-center mt-1.5 mb-2'>
                                            <div className='flex items-center font-bold space-x-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>
                                            </div>
                                            <span className=' text-gray-500 text-lg font-semibold px-0.5 py-0.5'>{item.address}</span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-3xl font-bold text-gray-900 '>
                                                {item.price}<span className='font-light text-xl '>$/{item.day}</span>
                                            </span>
                                            <a onClick={handleSignIn} className='text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>{item.buttonBook}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className='block'>
                                <div className=' flex justify-center md:justify-start mt-12 gap-4'>
                                    <button
                                        // onClick={handlePrev}
                                        className="relative h-18 w-18 border-2 hover:border-gray-500 rounded-full top-1/2 transform -translate-y-1/2 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-gray-300 hover:text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                        </svg>
                                        <span className="sr-only">Previous</span>
                                    </button>

                                    <button
                                        // onClick={handleNext}
                                        className="relative h-18 w-18 border-2 hover:border-gray-500 rounded-full right-0 top-1/2 transform -translate-y-1/2 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-gray-300 hover:text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        <span className="sr-only">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default Explore;