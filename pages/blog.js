import Head from "next/head"
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer';


const blog = ({posts}) => {

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
                <section className="text-center bg-gradient-to-r from-gray-200 to-gray-300 py-20">
                    <h1 className="mb-2 text-2xl font-bold text-gray-700 lg:text-4xl mt-10 ">Blog </h1>
                    <div className="text-white">
                        <span className="text-blue-800">Home -</span> Blog
                    </div>
                </section>

                <section className="container mx-auto px-6 gap-12 pt-12 pb-24 py-20">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                        {
                            posts && posts.map( (post, index) => {
                                return(
                                    <div key={index} className="max-w-3xl mx-4 mb-10 rounded-lg shadow-lg">
                                        <img className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover"
                                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                            alt="product" />
                                        <div className="bg-gray-50 p-8">
                                            <div className="text-xs text-gray-600 uppercase font-semibold">23 Sep 2020</div>
                                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                <Link href={`/blog/articles/${post.slug}`}>
                                                    <a className="text-gray-900 dark:text-gray-100">{post.title}</a>
                                                </Link>
                                            </h2>
                                            <p className="leading-normal text-gray-700">{post.body}</p>
                                            
                                            <div className="flex space-x-2 mt-5">
                                                {
                                                    post.post_has_tags && post.post_has_tags.map((tag, i) => {

                                                        return (
                                                            
                                                            <div class= "text-xs px-3 bg-gray-200 text-gray-800 rounded-full" key={i}>{tag.tag.name}</div>
                                                        )

                                                    })
                                                }
                                            </div>
                                            <Link href={`/blog/articles/${post.slug}`}>
                                                <a className="flex items-center mt-6 uppercase text-sm text-black font-semibold">Read article <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg></a>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                )
                            })

                        }
                        </div>
                        <aside className="hidden xl:block xl:pl-8">
                            <h2 class="sr-only">Details</h2>
                            <div class="space-y-5">
                                <div class="flex items-center space-x-2">
                                    <span class="font-display text-4xl font-extrabold text-cool-indigo-600">Free</span>
                                </div>
                            </div>
                            <div className="mt-6 border-t border-gray-200 pt-6 space-y-5">
                                <ul className="space-y-4">
                                    <li className="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-teal-400" x-description="Heroicon name: check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-base text-teal-700 font-medium">
                                        Well documented
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-teal-400" x-description="Heroicon name: check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-base text-teal-700 font-medium">
                                        Well documented
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-teal-400" x-description="Heroicon name: check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-base text-teal-700 font-medium">
                                        Well documented
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-teal-400" x-description="Heroicon name: check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-base text-teal-700 font-medium">
                                        Well documented
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </aside>
                    </div>
                
                    
                </section>

                <Footer data={resumeData.main}/>
            </main>
            
            
        </div>
    )
}

export async function getStaticProps(context){

    const response = await axios.get(
        `http://127.0.0.1:8001/api/posts`
    );

    const posts = response.data;

    return {
        props: { posts: posts },
    }
}

export default blog
