import Head from "next/head"
import { useState, useEffect } from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer';


const blog = () => {

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
                <title>Sayeedinfo.com | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main>
                <section class="text-center bg-gradient-to-r from-gray-200 to-gray-300 py-20">
                    <h1 class="mb-2 text-2xl font-bold text-gray-700 lg:text-4xl mt-10 ">Blog </h1>
                    <div class="text-white">
                        <span class="text-blue-800">Home -</span> Blog
                    </div>
                </section>

                <section class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 grid lg:grid-cols-4 py-20">
                    <div class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                        <img class="w-full h-48"
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="product" />
                        <div class="px-6 py-4">
                            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                            <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                                elit.
                                Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                        </div>
                    </div>
                    <div class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                        <img class="w-full h-48"
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="product" />
                        <div class="px-6 py-4">
                            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                            <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                                elit.
                                Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                        </div>
                    </div>
                    <div class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                        <img class="w-full h-48"
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="product" />
                        <div class="px-6 py-4">
                            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                            <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                                elit.
                                Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                        </div>
                    </div>
                    <div class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                        <img class="w-full h-48"
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="product" />
                        <div class="px-6 py-4">
                            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                            <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                                elit.
                                Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                        </div>
                    </div>
                    <div class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                        <img class="w-full h-48"
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="product" />
                        <div class="px-6 py-4">
                            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                            <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                                elit.
                                Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                        </div>
                    </div>
                    <div class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                        <img class="w-full h-48"
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="product" />
                        <div class="px-6 py-4">
                            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                            <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                                elit.
                                Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                        </div>
                    </div>
                    <div class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
                        <img class="w-full h-48"
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="product" />
                        <div class="px-6 py-4">
                            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                            <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                                elit.
                                Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                        </div>
                    </div>
                </section>

                <Footer data={resumeData.main}/>
            </main>
            
            
        </div>
    )
}

export default blog
