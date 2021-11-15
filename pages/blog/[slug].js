import Head from "next/head"
import axios from "axios";
import Header from "../../components/Header";
import Footer from '../../components/Footer';


const Post = ({post, slug}) => {
    return (
        <div>
            <Head>
                <title>Sayeedinfo.com | {post?.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main>
                <section className="text-center bg-gradient-to-r from-gray-200 to-gray-300 py-20">
                    <h1 className="mb-2 text-xl font-bold text-gray-800 lg:text-3xl mt-10 ">{post?.title}</h1>
                    <div className="text-white">
                        <span className="text-blue-800">Home -</span> Blog
                    </div>
                </section>

                <section className="container mx-auto px-10 mb-8 mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="col-span-1 lg:col-span-8">
                            <h1 className="text-xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left text-black">{post?.title}</h1>
                            <article className="mb-32">
                                <p>{post?.body}</p>
                            </article>
                        </div>
                        <div className="col-span-1 lg:col-span-4">
                            <div className="relative lg:sticky top-8">
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
                        </div>
                    </div>
                </section>
            </main> 

            <Footer/>   
            
        </div>
    )
};

export default Post;


// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const response = await axios.get("http://api.sayeedinfo.com/api/posts");
    const posts = response.data;
    let paths = [];
    posts.forEach((post) => {
        paths.push({
            params: { slug: post.slug },
        })
    });
    return { paths, fallback: true };
}

// Fetch data at build time
export async function getStaticProps(params) {
    const slug = params.params.slug;
    const response = await axios.get(
        `http://api.sayeedinfo.com/api/post/${slug}`
    );
    const post = response.data
    return {
        props: { slug, post: post },
    }
}


