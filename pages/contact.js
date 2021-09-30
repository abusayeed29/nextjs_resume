import Head from "next/head"
import Header from "../components/Header"


const contact = () => {
    return (
        <div>
            <Head>
                <title>sayeedinfo.com | contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main className="flex">
                <section className="flex-grow pt-28 px-6">
                <h1>Contact Page</h1>
                </section>
            </main>
            
        </div>
    )
}

export default contact
