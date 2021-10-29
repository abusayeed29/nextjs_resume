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
                <section class="text-center bg-gradient-to-r from-gray-200 to-gray-300 py-20">
                    <h1 class="mb-2 text-2xl font-bold text-gray-700 lg:text-4xl mt-10 ">Contact </h1>
                    <div class="text-white">
                        <span class="text-blue-800">Home -</span> Contact
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
