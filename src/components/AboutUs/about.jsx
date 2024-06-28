import Pop from '../../img/pop2.jpg';

function About() {
    return (
        <div className=" top-0 px-4 flex justify-between w-full">
            <div className='h-auto w-full'>
                <div className="ml-1 md:mx-10 h-auto w-auto">
                    <div className="flex flex-col">
                        <div className="text-6xl font-nunito font-semibold mt-5">
                            <h1>About Us</h1>
                        </div>
                        <span className="mt-5 text-gray-300 font-roboto text-4xl">SINCE 2010</span>
                    </div>
                    <div className="py-6 w-full">
                        <div className="grid lg:grid-cols-2 gap-10">
                            <p className="text-gray-400 font-nunito ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, excepturi cupiditate debitis libero consectetur quis deserunt praesentium minima, veritatis velit officiis aliquam consequuntur reiciendis odio veniam, ipsum amet aliquid rem sunt! Laboriosam delectus excepturi quaerat impedit non optio eveniet a illo dolorum soluta dolor ducimus quis, fugiat commodi. Rerum aliquid omnis cupiditate recusandae neque modi laudantium minima architecto voluptates. Iusto, quia! Odit ea aliquam officiis ratione, asperiores quaerat atque vel placeat ullam corporis nihil id similique magnam distinctio et ex veritatis commodi ad aliquid cumque perspiciatis. Nihil animi unde dolorum repellat maxime deleniti quam, at voluptates dolorem incidunt quaerat facere illo nam exercitationem provident. Veritatis officia, perspiciatis nulla quis, numquam quaerat id quae, illum consequatur iste laboriosam rerum esse? Amet aspernatur voluptas fugit illo, assumenda quam numquam temporibus deleniti sint illum mollitia quibusdam maxime accusamus fuga necessitatibus minus nihil, ullam dolor obcaecati? Deleniti dolore necessitatibus sunt ex eveniet ratione qui consequuntur minus doloribus quisquam! Aliquam repellat nobis accusantium, blanditiis molestiae accusamus dolore molestias incidunt ratione, iure optio eveniet culpa earum dolores non laboriosam rem a unde esse debitis! Vitae dicta alias iste ad optio excepturi libero fugit. Minima fuga rerum ipsa quod perferendis laborum quis aspernatur voluptas voluptatibus assumenda cupiditate magni, nihil id repudiandae, earum delectus minus libero voluptate. Consequatur ipsum vitae voluptate consequuntur! Eum, maiores cumque. Earum maiores omnis iste deserunt eaque cum accusantium nostrum, modi voluptate eum tenetur quos itaque illo facilis similique sint neque vero distinctio quis?</p>
                            <div className='w-full max-w-sm flex justify-between'>
                                <img src={Pop} alt="image1" className='relative overflow-hidden left-4 md:left-40 h-auto w-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;