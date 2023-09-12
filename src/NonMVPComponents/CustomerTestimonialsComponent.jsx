import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerTestimonialsComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Aprill Doe",
      job: "Lawyer",
      text: "I am very impressed with this website! The design and functionality are top-notch. It made my work much easier.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWVjOTAzMmItOGM1NS00MTdkLWE0YzAtZDE5ZDJlNDcxZjk5XkEyXkFqcGdeQXVyNDg3NTIyODU@._V1_.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      job: "Graphic Designer",
      text: "Your website is a designer’s dream. The clean layout and beautiful visuals are truly inspiring. Love the concept.",
      image: "URL_TO_IMAGE",
    },
    {
      id: 3,
      name: "Alice Johnson",
      job: "Marketing Manager",
      text: "I love how user-friendly your website is. It has significantly improved our online presence.",
      image: "URL_TO_IMAGE",
    },
    {
      id: 4,
      name: "Jese Leos",
      job: "Design Lead",
      text: "Mindblowing workflow, Aesthetically, the well designed components are beautiful.",
    },
    {
      id: 5,
      name: "John Doe",
      job: "Web Developer",
      text: "Lorem ipsum dolor sit amet, csce nec ultrices risus, ac bibendum felis. Sed ut facilisis sapien.",
      image: "URL_TO_IMAGE",
    },
    {
      id: 6,
      name: "John Doe",
      job: "Web Developer",
      text: "Lorem ipsum dolor sit amet, csce nec ultrices risus, ac bibendum felis. Sed ut facilisis sapien.",
      image: "URL_TO_IMAGE",
    },
    // Add more testimonials here
  ];

  return (
    <div className="container my-24 mx-auto md:px-6 lg:px-8 bg-orange-500">
      <section className="mb-32 text-center">
        <h2 className="mb-4 pb-4 p-4 text-center text-3xl font-bold">
          Testimonials
        </h2>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mb-6 lg:mb-8">
              <div className="relative block rounded-lg mr-4 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-200">
                <div className="p-6">
                  <div className="text-center">
                    <div className="relative inline-block rounded-full overflow-hidden w-24 h-24 shadow-md mb-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h5 className="mb-1 text-lg font-bold">
                      {testimonial.name}
                    </h5>
                    <h6 className="mb-1 font-medium text-primary dark:text-primary-400">
                      {testimonial.job}
                    </h6>
                    <div className="mb-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          role="img"
                          aria-label="heart"
                          className="text-red-500 text-2xl"
                        >
                          ❤️
                        </span>
                      ))}
                    </div>
                    <p>{testimonial.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default CustomerTestimonialsComponent;
