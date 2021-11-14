import Head from "next/head"
import axios from "axios";
import Header from "../components/Header"
import Footer from '../components/Footer';
import PostCard from "../components/PostCard";


const blog = ({posts}) => {

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
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* start left */}
                        <div className="lg:col-span-8 col-span-1">
                            {posts && posts.map((post, index) => (
                                <PostCard key={index} title={post.title} slug={post.slug} body={post.body} tags={post.post_has_tags} />
                            ))}
                        </div>
                        {/* sidebar */}
                        <aside className="lg:col-span-4 col-span-1">
                            <div className="lg:sticky relative top-8">
                                <h2 className="sr-only">Details</h2>
                                <div className="space-y-5">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-display text-4xl font-extrabold text-cool-indigo-600">Category</span>
                                    </div>
                                </div>
                                <div className="mt-6 border-t border-gray-200 pt-6 space-y-5">
                                    <ul className="space-y-4">
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-teal-400" x-description="Heroicon name: check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base text-teal-700 font-medium">
                                            Well documented
                                            </p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-teal-400" x-description="Heroicon name: check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base text-teal-700 font-medium">
                                            Well documented
                                            </p>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        {/* end sidebar */}
                    </div>
                </section>

                <Footer/>
            </main>
            
        </div>
    )
}
export default blog

// Fetch data at build time
export async function getStaticProps(context){
    const response = await axios.get(
        `http://127.0.0.1:8001/api/posts`
    );
    const posts = response.data;
    return {
        props: { posts: posts },
    }
}
