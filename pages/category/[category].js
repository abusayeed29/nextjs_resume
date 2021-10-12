import Head from "next/head";
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import { useRouter } from "next/dist/client/router";


const category = ({category, name}) => {

    // const router = useRouter();
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

                <Footer />
            </main>

        </div>
    )
}

export async function getStaticPaths() {
    const paths = [
        { params: { category: "web" } },
        { params: { category: "travel" } }
    ];


    return { paths, fallback: false};

}

export async function getStaticProps(params){

    const category = params.params.category;

    return {
        props : {category, name : "Sayeed"},
    }
}

export default category;
