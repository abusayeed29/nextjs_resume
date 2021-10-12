import Head from "next/head"
import { useState, useEffect } from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import Resume from "../components/Resume";


const resume = () => {

    const [resumeData, setResumeData] = useState({});
    useEffect(() => {
        fetch("resumeData.json")
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                setResumeData(data);
            });
    }, []);

    return (
        <div>
            <Head>
                <title>sayeedinfo.com | resume</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main>
                <section class="text-center bg-gradient-to-r from-gray-200 to-gray-300 py-20">
                    <h1 class="mb-2 text-2xl font-bold text-gray-700 lg:text-4xl mt-10 ">Resume </h1>
                    <div class="text-white">
                        <span class="text-blue-800">Home -</span> Resume
                    </div>
                </section>

                <Resume/>
                <Portfolio data = {resumeData.portfolio} />

                <Footer data={resumeData.main}/>
            </main>
            
        </div>
    )
}

export default resume
