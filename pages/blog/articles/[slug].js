import axios from "axios";


const Post = ({post, slug}) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
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


