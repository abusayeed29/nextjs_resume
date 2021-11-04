import Head from "next/head"
import axios from "axios";
import { useState, useEffect } from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer';


const portfolio = ({ projects }) => {

    // const [resumeData, setResumeData] = useState({});

    // useEffect(() => {
    //     fetch("resumeData.json")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setResumeData(data);
    //         });
    // }, []);


    return (
        <div>
            <Head>
                <title>Sayeedinfo.com | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <section class="text-center bg-gradient-to-r from-gray-200 to-gray-300 py-20">
                    <h1 class="mb-2 text-2xl font-bold text-gray-700 lg:text-4xl mt-10 ">Portfolio </h1>
                    <div class="text-white">
                        <span class="text-red-600">Home -</span> Portfolio
                    </div>
                </section>

                <div class="flex justify-center mt-8 space-x-2 flex-wrap">
                    <button className="text-gray-500 bg-white px-10 py-2 shadow-md rounded-full font-medium my-1 hover:shadow-xl active:scale-90 transition duration-150">All</button>
                    <button className="text-gray-500 bg-white px-10 py-2 shadow-md rounded-full font-medium my-1 hover:shadow-xl active:scale-90 transition duration-150">React</button>
                    <button className="text-gray-500 bg-white px-10 py-2 shadow-md rounded-full font-medium my-1 hover:shadow-xl active:scale-90 transition duration-150">Laravel</button>
                    <button className="text-gray-500 bg-white px-10 py-2 shadow-md rounded-full font-medium my-1 hover:shadow-xl active:scale-90 transition duration-150">WordPress</button>
                </div>

                <section class="container mx-auto grid grid-cols-1 md:grid-cols-3 space-y-2 lg:space-y-0 gap-8 py-10 pb-40">

                    {projects && projects.map((project, index) => {
                        return (
                            <a key={index} href={project.url} target="_blank" className="w-full block shadow-2xl">
                                <div class="relative overflow-hidden">
                                    <div className="h-72 object-cover">
                                        <img 
                                            src={"https://sayeedinfo.com/uploads/images/"+project.image}
                                            alt="portfolio" 
                                            class="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                                        />
                                    </div>
                                    <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-gray-800 rounded-md px-2"> {project.title}</h1>
                                    <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">

                                        {`${project.id}`.length === 1 ? "0" + `${project.id}` : `${project.id}` }

                                    </h1>
                                </div>
                            </a>
                        )
                    })

                    }

                </section>

                <Footer />
            </main>

        </div>
    )
}

export async function getStaticProps(context) {

    const response = await axios.get(
        `http://127.0.0.1:8001/api/projects`
    );

    const projects = response.data;

    return {
        props: { projects: projects },
    }
}

export default portfolio
