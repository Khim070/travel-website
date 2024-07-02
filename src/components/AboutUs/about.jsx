import { useState, useEffect } from 'react';
import Pop from '../../img/pop2.jpg';
import { getAllAboutUs } from '../../Services/AboutUsServices.jsx';

function About() {

    const [aboutUs, setAboutUs] = useState([]);

    useEffect(() => {
        const fetchAboutUs = async () => {
            try {
                const response = await getAllAboutUs();
                const activeAboutUs = response.data
                    .filter(item => item.id === 1);

                setAboutUs(activeAboutUs);
                // console.log(activeAboutUs);
            } catch (error) {
                console.error('Failed to fetch about us:', error);
            }
        };

        fetchAboutUs();
    }, []);

    return (
        <div className=" top-0 px-4 flex justify-between w-full">
            {aboutUs.map((item, i) => (
                <div className='h-auto w-full' key={i}>
                    <div className="ml-1 md:mx-10 h-auto w-auto">
                        <div className="flex flex-col">
                            <div className="text-6xl font-nunito font-semibold mt-5">
                                <h1>{item.title}</h1>
                            </div>
                            <span className="mt-5 text-gray-300 font-roboto text-4xl">{item.tag}</span>
                        </div>
                        <div className="py-6 w-full">
                            <div className="grid lg:grid-cols-2 gap-10">
                                <p className="text-gray-400 font-nunito text-2xl ml-5">{item.description}</p>
                                <div className='w-full max-w-sm flex justify-between'>
                                    <img src={`http://localhost:8080/image/${item.image}`} alt="image1" className='relative overflow-hidden left-4 md:left-40 h-auto w-auto' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default About;