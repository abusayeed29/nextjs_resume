import Head from "next/head"
import Header from "../components/Header"
import Footer from '../components/Footer';
import ContactForm from "../components/sections/ContactForm";



const contact = () => {
    return (
        <div>
            <Head>
                <title>Sayeedinfo.com | contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main>
                <section className="text-center bg-gradient-to-r from-gray-200 to-gray-300 py-20">
                    <h1 className="mb-2 text-2xl font-bold text-gray-700 lg:text-4xl mt-10 ">Contact </h1>
                    <div className="text-white">
                        <span className="text-blue-800">Home -</span> Contact
                    </div>
                </section>

                <section className="flex-grow container mx-auto py-20">
                    
                    <ContactForm/>
                </section>

                <Footer/>
            </main>
            
        </div>
    )
}

export default contact
