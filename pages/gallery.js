import Head from "next/head"
import Header from "../components/Header"
import Footer from '../components/Footer';

const gallery = () => {
    return (
        <div>
            <Head>
                <title>Sayeedinfo.com | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main>
                <section className="text-center bg-gradient-to-r from-gray-200 to-gray-300 py-20">
                    <h1 className="mb-2 text-2xl font-bold text-gray-700 lg:text-4xl mt-10 ">Blog </h1>
                    <div className="text-white">
                        <span className="text-blue-800">Home -</span> Blog
                    </div>
                </section>

                <Footer/>
            </main>
            
        </div>
    )
}

export default gallery
