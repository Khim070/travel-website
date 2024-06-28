import Vakhim from '../../img/vakhim.jpg';
import Panha from '../../img/panha.jpg';
import Sela from '../../img/sela.jpg';
import Sokmey from '../../img/sokmey.jpg';
import Vanroth from '../../img/vanroth.jpg';
import Liza from '../../img/liza.JPG';

function OurTeam() {
    return (
        <section className="bg-white ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 font-nunito">Our Team</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-900">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit cumque voluptas atque nulla officia iste alias veritatis dolore incidunt quisquam sed aut dolorem quibusdam, vel tempore saepe molestias mollitia enim.</p>
                </div>
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="text-center text-gray-700 dark:text-gray-600">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Vakhim} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-nunito font-bold tracking-tight text-gray-700 ">
                            <a href="#">Leang Vakhim</a>
                        </h3>
                        <p>Group Leader</p>
                    </div>
                    <div className="text-center text-gray-700 dark:text-gray-600">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-nunito font-bold tracking-tight text-gray-700 ">
                            <a href="#">Meourn Kimlong</a>
                        </h3>
                        <p>Backend Developer</p>
                    </div>
                    <div className="text-center text-gray-700 dark:text-gray-600">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Panha} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-nunito font-bold tracking-tight text-gray-700 ">
                            <a href="#">Leng Panha</a>
                        </h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="text-center text-gray-700 dark:text-gray-600">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Sela} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-nunito font-bold tracking-tight text-gray-700 ">
                            <a href="#">Hout Hengsela</a>
                        </h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="text-center text-gray-700 dark:text-gray-600">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Sokmey} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-nunito font-bold tracking-tight text-gray-700 ">
                            <a href="#">Lim Sokmey</a>
                        </h3>
                        <p>Data Entry/Slide</p>
                    </div>
                    <div className="text-center text-gray-700 dark:text-gray-600">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Liza} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-nunito font-bold tracking-tight text-gray-700 ">
                            <a href="#">Meas Liza</a>
                        </h3>
                        <p>Data Entry/Slide</p>
                    </div>
                    <div className="text-center text-gray-700 dark:text-gray-600">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Vanroth} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-nunito font-bold tracking-tight text-gray-700 ">
                            <a href="#">Im Vanroth</a>
                        </h3>
                        <p>QA Tester</p>
                    </div>
                    <div className="text-center text-gray-700 dark:text-gray-600">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-nunito font-bold tracking-tight text-gray-700 ">
                            <a href="#">Lim Kounghuy</a>
                        </h3>
                        <p>QA Tester</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default OurTeam;