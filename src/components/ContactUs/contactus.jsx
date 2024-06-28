import Facebook from '../../img/facebook.png';
import Instragram from '../../img/instagram.png';
import Youtube from '../../img/youtube.png';
import Telegram from '../../img/telegram.png';

function ContactUs() {
    return (
        <div id='contact-us'>
            <div className=" top-0 px-4 flex justify-between w-full">
                <div className='h-auto w-full'>
                    <div className="ml-1 md:mx-10 h-auto w-auto">
                        <div className="flex flex-col">
                            <div className="text-6xl font-nunito font-semibold mt-5">
                                <h1>Contact Us</h1>
                            </div>
                        </div>
                        <div className="py-6 w-full overflow-hidden">
                            <div className="grid lg:grid-cols-2 gap-10">
                                <div className="grid-cols-1">
                                    <span className="mt-5 text-gray-400 font-roboto text-xl">
                                        Feel free to contact us anytime. We will get back to you as soon as we can!
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
                                        <div className="py-5 text-center ">
                                            <button class=" bg-black hover:bg-gray-700 transition ease-out 300s border-black hover:border-gray-700 text-xl border-4 text-white py-3 md:px-64 px-40 rounded" type="button">
                                                SEND
                                            </button>
                                        </div>

                                        <div className="w-full md:max-w-xl px-5 flex justify-between">
                                            <div className='h-16 w-16'>
                                                <a href="/">
                                                    <img src={Facebook} alt="Facebook" />
                                                </a>
                                            </div>
                                            <div className='h-16 w-16'>
                                                <a href="/">
                                                    <img src={Instragram} alt="Instragram" />
                                                </a>
                                            </div>
                                            <div className='h-16 w-16'>
                                                <a href="/">
                                                    <img src={Telegram} alt="Telegram" />
                                                </a>
                                            </div>
                                            <div className='h-16 w-16'>
                                                <a href="/">
                                                    <img src={Youtube} alt="Youtube" />
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="grid-cols-1">
                                    <div className="bg-black w-full max-w-sm md:max-w-xl h-auto">
                                        <div className="flex flex-col text-white">
                                            <h1 className=" text-5xl px-12 py-6">Info</h1>
                                            <div className=" pl-5 font-roboto text-2xl py-4">
                                                <div className="flex flex-row">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                                    </svg>
                                                    <span className="transform translate-y-4 ml-2">info@travel.com.kh</span>
                                                </div>
                                            </div>

                                            <div className=" pl-5 font-roboto text-2xl py-4">
                                                <div className="flex flex-row">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16">
                                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="transform translate-y-4 ml-2">+855 10 200 000</span>
                                                </div>
                                            </div>

                                            <div className=" pl-5 font-roboto text-2xl py-4">
                                                <div className="flex flex-row">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16">
                                                        <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="transform translate-y-4 ml-2">Sangkat Tonle Basac</span>
                                                </div>
                                            </div>

                                            <div className=" pl-5 font-roboto text-2xl py-4">
                                                <div className="flex flex-row">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="transform translate-y-4 ml-2">8:00 am - 5:00 pm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;