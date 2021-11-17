import Image from "next/image";
import Slider from "react-slick";
import testimonialBg from "../public/img/testimonials-bg.jpg";

const Testimonial = ({ data }) => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 2,
        swipeToSlide: true,
        autoplay: false,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                autoplay: true,
                slidesToScroll: 4,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                slidesToScroll: 1
              }
            }
        ]

    };

    if (data) {
        var testimonials = data.testimonials.map(function (testimonial) {
            //var projectImage = "/img/portfolio/" + projects.image;
            return (

                <div key={testimonial.user} 
                    className="flex scrollbar-hide items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:text-black hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out text-white"
                >
                    {/* Right */}
                    <div className="h-100 w-100 p-10">
                        {/* <div className="relative h-16 w-16">
                            <Image src={testimonial.timg} layout="fill" className="rounded-lg"/>
                        </div> */}
                        <p className="italic">" {testimonial.text} "</p>
                        <h2 className="font-semibold mt-5">{testimonial.user}</h2>
                        <p className="italic font-light">{testimonial.deg}</p>
                    </div>
                    
                </div>


                // <div key={projects.title} className="cursor-pointer hover:scale-105 transform transition duration-200 ease-out overflow-hidden">
                //     <div className="h-100 w-80 p-5">
                //         <Image src={projectImage} alt={projects.title} width={300} height={200} className="rounded-xl" />
                //         <h3>{projects.title}</h3>
                //         <p>{projects.category}</p>
                //     </div>
                // </div>

            );

        });
    }


    return (
        <div
            className="bg-fixed w-full h-full bg-no-repeat py-20 bg-cover testimonials-bg"
            id="testimonial"
        >

            <div className="container mx-auto">
                <div className="mx-auto text-center pb-3 text-white">
                    <h2 className="text-4xl font-semibold pb-2">Testimonial</h2>
                    <p>What My Client Say About Me</p>
                </div>

                <div className="flex flex-col space-x-3 overflow-scroll scrollbar-hide p-6">
                    <Slider {...settings} className="">
                        {testimonials}
                    </Slider>
                </div>
            </div>



            <style jsx>{`
                    .testimonials-bg {
                        background-image: url('../img/testimonials-bg.jpg');
                        background-repeat: no-repeat;
                        background-size: cover;
                    },
                `}
            </style>

        </div>
    )
}

export default Testimonial;

