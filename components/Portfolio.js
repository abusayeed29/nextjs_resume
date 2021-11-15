import Image from "next/image";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";

const Portfolio = () => {

    const [data, setData] = useState();

    useEffect(async () => {
        const response = await axios.get(
            `http://api.sayeedinfo.com/api/projects`
        );

        setData(response.data);

    }, []);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    if (data) {

        var projects = data.map(function (projects) {

            var projectImage = "https://sayeedinfo.com/uploads/images/"+projects.image;
                        
            return (
                <div key={projects.title} className="cursor-pointer hover:scale-105 transform transition duration-200 ease-out overflow-hidden">
                    <div className="h-100 w-80 p-5">
                        <Image src={projectImage} alt={projects.title} width={300} height={200} className="rounded-xl" />
                        <h3>{projects.title}</h3>
                        <p>{projects.category}</p>
                    </div>
                </div>

            );

        });
    }


    return (


        <section className="py-20" style={{ background: '#f1f1f1' }} id="portfolio">

            <div className="container mx-auto">
                <div className="mx-auto text-center pb-8">
                    <h2 className="text-4xl font-semibold pb-2">My Projects</h2>
                    <p>Check Out Some of My Works.</p>
                </div>

                <div className="flex flex-col space-x-3 overflow-scroll scrollbar-hide p-6">
                    <Slider {...settings} >
                        {projects}
                    </Slider>
                    
                    {/* <Slider {...settings} >
                        {data && data.map((project, index) => {
                            return (
                                <h1> {project.title}</h1>
                            )
                        })
                        }
                    </Slider> */}


                </div>
            </div>

        </section>
    )
}


// export async function getStaticProps(context) {

//   const response = await axios.get(
//     `http://127.0.0.1:8001/api/projects`
//   );

//   const data = response.data;


//   return {
//     props: { data: data },
//   }


// }


export default Portfolio;
