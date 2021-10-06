import Image from "next/image";
import Slider from "react-slick";

const Portfolio = ({ data }) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 4,
        swipeToSlide: true,
        speed: 500
      };

    if (data) {
        var projects = data.projects.map(function (projects) {
            var projectImage = "/img/portfolio/" + projects.image;
            return (
                <div key={projects.title} className="cursor-pointer hover:scale-105 transform transition duration-200 ease-out overflow-hidden">
                    <div className="h-80 w-80">
                        <Image src={projectImage} alt={projects.title} width={300} height={300} className="rounded-xl" />
                    </div>
                    <h3>{projects.title}</h3>
                    <p>{projects.category}</p>
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
                </div>
            </div>

        </section>
    )
}

export default Portfolio;
