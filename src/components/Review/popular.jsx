import { useEffect, useState } from 'react';
import { getHeaderPopular, getPopularItem } from '../../Services/ReviewServices.jsx';

const Popular = () => {

    const [headerPopular, setHeaderPopular] = useState([]);
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        const fetchHeaderPopular = async () => {
            try {
                const response = await getHeaderPopular();
                const activePopular = response.data
                    .filter(item => item.id === 1);

                setHeaderPopular(activePopular);
            } catch (error) {
                console.error('Failed to fetch popular:', error);
            }
        };

        fetchHeaderPopular();
    }, []);

    useEffect(() => {
        const fetchPopular = async () => {
            try {
                const response = await getPopularItem();
                const activePopularItem = response.data
                    .filter(item => item.active === 1 && item.display === 1)
                    .sort((a, b) => a.orderID - b.orderID)
                    .slice(0, 3);

                setPopular(activePopularItem);
            } catch (error) {
                console.error('Failed to fetch popular:', error);
            }
        };

        fetchPopular();
    }, []);

    return (
        <div>
        {headerPopular.map((item, i) => (
            <div className=" px-4 py-6 flex justify-between" key={i}>
                {/* left side */}
                <div  className='grid grid-cols-1 h-auto gap-x-6 gap-y-8 sm:grid-cols-2 md:mt-10'>
                    <div className="ml-1 md:ml-10 w-auto h-auto col-span-1">
                        <div className="flex flex-col">
                            <span style={{ color: `#${item.color}`}} className="font-nunito text-6xl">
                                {item.title}
                            </span>
                            <div className="text-6xl font-nunito font-semibold mt-5">
                                <h1>{item.tag}</h1>
                            </div>
                            {popular.map((item, i) => (
                            <div key={i}>
                                <div  className="mt-5 mb-7">
                                    <span style={{ backgroundColor: `#${item.color}` }} className="text-4xl px-6 text-white rounded-full">{i+1}</span>
                                    <div className="mt-5">
                                        <h1 className="text-4xl font-nunito font-bold">{item.title}</h1>
                                        <p className="mt-3 mr-5 text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    {/* right side */}
                    <div className="flex justify-end col-span-1">
                        {popular.slice(0, 2).map((item, i) => (
                            <div key={i} className='relative hidden md:block'>
                                <div className={`relative ${i === 1 ? 'h-96 w-96 md:right-20 md:bottom-0 z-10' : ' h-72 w-72 z-20 md:left-12 md:top-80'}`}>
                                    <img
                                        className="hidden lg:block absolute rounded-full border-4 border-white"
                                        src={`http://localhost:8080/image/${item.image}`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default Popular;