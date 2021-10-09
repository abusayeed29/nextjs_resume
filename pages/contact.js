import Head from "next/head"
import Header from "../components/Header"
import Footer from '../components/Footer';


const contact = () => {
    return (
        <div>
            <Head>
                <title>sayeedinfo.com | contact</title>
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

                <section className="flex-grow pt-28 py-28 text-center">
                <h1>Contact Page</h1>
                </section>

                <Footer/>
            </main>
            
        </div>
    )
}

export default contact
