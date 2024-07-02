import React, { useState, useEffect } from 'react';
import { getHeaderPopular, getPeople } from "../../Services/AboutUsServices.jsx";

function OurTeam() {

    const [header, setHeader] = useState([]);
    const [person, setPerson] = useState([]);

    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const response = await getHeaderPopular();
                const activeHeader = response.data
                    .filter(item => item.id === 3);

                setHeader(activeHeader);
            } catch (error) {
                console.error('Failed to fetch header:', error);
            }
        };

        fetchHeader();
    }, []);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await getPeople();
                const activePeople = response.data
                    .filter(item => item.active === 1 && item.display === 1)
                    .sort((a, b) => a.orderId - b.orderId);

                setPerson(activePeople);
                // console.log(activePeople);
            } catch (error) {
                console.error('Failed to fetch people:', error);
            }
        };

        fetchPeople();
    }, []);

    return (
        <section className="bg-white ">
            {header.map((item, i) => (
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 style={{ color:`#${item.color}`}} className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 font-nunito">{item.title}</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-900">{item.tag}</p>
                    </div>
                    <div className=" grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {person.map((item, i) => (
                        <div className="text-center text-gray-700 dark:text-gray-600">
                            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={`http://localhost:8080/image/${item.photo}`} alt="Bonnie Avatar" />
                            <h3 className="mb-1 text-2xl font-nunito font-bold tracking-tight text-gray-700 ">
                                <a>{item.name}</a>
                            </h3>
                            <p>{item.position}</p>
                        </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default OurTeam;