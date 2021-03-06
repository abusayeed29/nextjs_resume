import Head from "next/head";
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";


const category = ({category, name}) => {

    const router = useRouter();

    const tag = router.query.category;

    const [posts, setPosts] = useState();

    useEffect(async()=>{

        async function fetchBlogPosts(){

            const response = await axios.get(
                `http://api.sayeedinfo.com/api/category/${tag}`
            );

            console.log(response);

            setPosts(response.data)
        }

        fetchBlogPosts();


        
    }, []);

    // const { category } = router.query;

    // console.log(category);

    return (
        <div>
            <Head>
                <title>Sayeedinfo.com | Category</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <section className="text-center bg-gradient-to-r from-gray-200 to-gray-300 py-20">
                    <h1 className="mb-2 text-2xl font-bold text-gray-700 lg:text-4xl mt-10 ">{name} </h1>
                    <div className="text-white">
                        <span className="text-blue-800">Home -</span> Category / {category}
                    </div>
                </section>
                <div>
                {
                    posts && posts.map( (post, index) => {
                    
                     return (
                        <div key={index}>  
                            <Link href={`/blog/articles/${post.slug}`}>
                                <h2>{post.title}</h2>
                            </Link> 
                            
                            <p> Posted on {post.publish_date}</p>
                            <p> Tag:  {post.tag_name}</p>
                        </div>
                     );

                    })
                
                }
                </div>
                
                <Footer />
            </main>

        </div>
    )
}

export async function getStaticPaths() {
    const paths = [
        { params: { category: "travel" } },
        { params: { category: "ReactJs" } }
    ];


    return { paths, fallback: true};

}

export async function getStaticProps(params){

    const category = params.params.category;

    return {
        props : {category, name : "Sayeed"},
    }
}

export default category;
