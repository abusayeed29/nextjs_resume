import Head from "next/head"
import axios from "axios";
import Header from "../../components/Header";
import Footer from '../../components/Footer';


const Post = ({post, slug}) => {
    return (
        <div>
            <Head>
                <title>Sayeedinfo.com | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main>
                <section className="text-center bg-gradient-to-r from-gray-200 to-gray-300 py-20">
                    <h1 className="mb-2 text-2xl font-bold text-gray-700 lg:text-4xl mt-10 ">{post.title}</h1>
                    <div className="text-white">
                        <span className="text-blue-800">Home -</span> Blog
                    </div>
                </section>

                <section className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 py-20">
                    <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{post.title}</h1>
                    <article className="mb-32">
                        
                        <p>{post.body}</p>
                    </article>
                </section>
            </main> 

            <Footer/>   
            
        </div>
    )
};

export default Post;


export async function getStaticPaths() {

    const response = await axios.get("http://127.0.0.1:8001/api/posts");

    const posts = response.data;

    let paths = [];

    posts.forEach((post) => {
        paths.push({
            params: { slug: post.slug },
        })
    });

    return { paths, fallback: true };

}

export async function getStaticProps(params) {

    const slug = params.params.slug;
    
    const response = await axios.get(
        `http://127.0.0.1:8001/api/post/${slug}`
    );

    const post = response.data

    return {
        props: { slug, post: post },
    }
}


