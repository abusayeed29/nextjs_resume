import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

export default function Home() {


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
        <>
            <Head>
                <title>Sayeedinfo.com | Md. Abu Sayeed </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header data = {resumeData.main}/>
            <Banner data = {resumeData.main} />
            <main>
                {/* About */}
                <About data = {resumeData.main} />
                {/* Resume */}
                <Resume />
                {/* Portfolio */}
                <Portfolio />
                {/* Testimonial */}
                <Testimonial />
                {/* Contact */}
                <Contact />
                {/* Footer */}
                <Footer />
            </main>

            <h1>Lets Builld NEXT APP</h1>

        </>
    )
}
