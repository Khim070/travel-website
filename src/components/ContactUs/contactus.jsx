import { getHeader, getAllDetail } from '../../Services/ContactUsServices.jsx';
import { useState, useEffect } from 'react';

function ContactUs() {

    const [header, setHeader] = useState([]);
    const [detailContact, setDetailContact] = useState([]);
    const [detailInfo, setDetailInfo] = useState([]);

    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const response = await getHeader();
                const activeHeader = response.data
                    .filter(item => item.id === 1);

                setHeader(activeHeader);
            } catch (error) {
                console.error('Failed to fetch header:', error);
            }
        };

        fetchHeader();
    }, []);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await getAllDetail();
                const activeContact = response.data
                    .filter(item => item.active === 1 && item.display === 1 && item.type === 'IconContact')
                    .sort((a, b) => a.orderID - b.orderID);

                setDetailContact(activeContact);
            } catch (error) {
                console.error('Failed to fetch detail contact:', error);
            }
        };

        fetchContact();
    }, []);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const response = await getAllDetail();
                const activeInfo = response.data
                    .filter(item => item.active === 1 && item.display === 1 && item.type === 'IconInfo')
                    .sort((a, b) => a.orderID - b.orderID);

                setDetailInfo(activeInfo);
            } catch (error) {
                console.error('Failed to fetch detail info:', error);
            }
        };

        fetchInfo();
    }, []);

    const isActive = header.length > 0 && header[0].active === 1;

    return (
        <div id='contact-us' className={isActive ? 'block' : 'hidden' }>
            {header.map((item, i) => (
                <div className=" top-0 mx-auto max-w-screen-2xl px-4 flex justify-between w-full">
                    <div className='mx-0 h-auto w-full'>
                        <div className="ml-1 md:mx-10 h-auto w-auto">
                            <div className="flex flex-col">
                                <div className="text-6xl font-nunito font-semibold mt-5">
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                            <div className="py-6 w-full overflow-hidden">
                                <div className="grid lg:grid-cols-2 gap-10">
                                    <div className="grid-cols-1">
                                        <span className="mt-5 text-gray-400 font-roboto text-xl">
                                            {item.tag}
                                        </span>
                                        <form className="w-full md:max-w-xl max-w-sm">
                                            <div className="flex items-center border-b-2 text-xl border-gray-500 pt-8 pb-5">
                                                <input type="text" placeholder="Name" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                            </div>
                                            <div className="flex items-center border-b-2 text-xl border-gray-500 pt-8 pb-5">
                                                <input type="text" placeholder="Email" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                            </div>
                                            <div className="flex items-center border-b-2 text-xl border-gray-500 pt-8 pb-5">
                                                <input type="text" placeholder="Message" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                            </div>
                                            <div className="py-5 text-center mt-5">
                                                <button class=" bg-black hover:bg-gray-700 transition ease-out 300s border-black hover:border-gray-700 text-xl border-4 text-white py-3 md:px-64 px-40 rounded" type="button">
                                                    {item.buttonSend}
                                                </button>
                                            </div>

                                            <div className="w-full md:max-w-xl px-5 flex justify-between">
                                                {detailContact.map((item, i) => (
                                                    <div className='h-16 w-16'>
                                                        <a href="/">
                                                            <img src={`http://localhost:8080/image/${item.icon}`} />
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </form>
                                    </div>

                                    <div className="grid-cols-1">
                                        <div className=" w-full bg-black max-w-sm md:max-w-xl h-auto absolute">
                                            <div className="flex flex-col text-white">
                                                <h1 className=" text-5xl font-nunito px-12 py-6">{item.info}</h1>
                                                {detailInfo.map((item, i) => (
                                                    <span className='flex flex-row items-center relative py-2' key={i}>
                                                        <a className='h-20 w-20 inline-block'>
                                                            <img src={`http://localhost:8080/image/${item.icon}`} className="z-20 ml-5 text-white overflow-auto h-full w-full object-cover"/>
                                                        </a>
                                                        <span className=" text-2xl ml-10">{item.description}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
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

export default ContactUs;