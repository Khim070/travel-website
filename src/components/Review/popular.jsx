import PopularImage1 from '../../img/pop1.jpg';
import PopularImage2 from '../../img/pop2.jpg';

function Popular() {
    return (
        <div className=" px-4 py-6 flex justify-between">
            {/* left side */}
            <div className='grid grid-cols-1 h-auto gap-x-6 gap-y-8 sm:grid-cols-2 md:mt-10'>
                <div className="ml-1 md:ml-10 w-auto h-auto col-span-1">
                    <div className="flex flex-col">
                        <span className="text-purple-500 font-nunito text-2xl">Popularity</span>
                        <div className="text-6xl font-nunito font-semibold mt-5">
                            <h1>Most Popular <br /> Vist Destination</h1>
                        </div>

                        <div className="mt-5 mb-7">
                            <span className="text-4xl bg-blue-600 px-6 text-white rounded-full">01</span>
                            <div className="mt-5">
                                <h1 className="text-4xl font-nunito font-bold">Angkor Wat</h1>
                                <p className="mt-3 mr-5 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus consequuntur et quis optio minima velit voluptatem! Tempora accusantium, et quasi voluptatum enim adipisci facere. Magni facere vitae nisi fugit doloribus?</p>
                            </div>
                        </div>

                        <div className="mt-5 mb-7">
                            <span className="text-4xl bg-pink-400 px-6 text-white rounded-full">02</span>
                            <div className="mt-5">
                                <h1 className="text-4xl font-nunito font-bold">Angkor Thom</h1>
                                <p className="mt-3 mr-5 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus consequuntur et quis optio minima velit voluptatem! Tempora accusantium, et quasi voluptatum enim adipisci facere. Magni facere vitae nisi fugit doloribus?</p>
                            </div>
                        </div>

                        <div className="mt-5 mb-7">
                            <span className="text-4xl bg-orange-400 px-6 text-white rounded-full">03</span>
                            <div className="mt-5">
                                <h1 className="text-4xl font-nunito font-bold">Phnum Kulen</h1>
                                <p className="mt-3 mr-5 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus consequuntur et quis optio minima velit voluptatem! Tempora accusantium, et quasi voluptatum enim adipisci facere. Magni facere vitae nisi fugit doloribus?</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="flex justify-end col-span-1">
                    <div className='relative hidden md:block'>
                        <div className="relative h-96 w-96">
                            <img
                                className="hidden lg:block absolute md:right-16 md:top-12 rounded-full"
                                src={PopularImage1}
                                alt="image1"
                            />
                        </div>

                        <div className='relative h-72 w-72'>
                            <img
                                className="hidden lg:block absolute md:right-52 md:top-12 rounded-full"
                                src={PopularImage2}
                                alt="image2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popular;