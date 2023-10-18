import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Libby from "../Assets/libby.jpeg";
import Randy from "../Assets/Randy.jpeg";

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
      name: "Jordan Manley",
      job: "Senior Instructor Pursuit",
      text: "With this app, I can choose a market that best fits the things I value: price and location! ",
      image:
        "https://media.licdn.com/dms/image/C4D03AQEEQaOc98LPgw/profile-displayphoto-shrink_800_800/0/1579980988739?e=1702512000&v=beta&t=nc0e8FU0ZAf2veVIn4RlRCwiI0_uvSoHRV5Rx2_8Jn0",
    },
    {
      id: 2,
      name: "Libby",
      job: "Biochemist",
      text: "I can't get enough of this site.",
      image: Libby,
    },
    {
      id: 3,
      name: "Lillian Schneck",
      job: "Director",
      text: "I love how user-friendly your website is.",
      image:
        "https://media.licdn.com/dms/image/C4D03AQGvdepbXdpNBQ/profile-displayphoto-shrink_800_800/0/1608569572142?e=1702512000&v=beta&t=XyFXBPAx88PwRu-ausqCZ_iB-0HCBGKjkEjZjWmpjEg",
    },
    {
      id: 4,
      name: "Rachel Liang",
      job: "Data Operations Manager",
      text: "This is the best money and time saver for busy people! I love that this app gives me visibility into my neighborhood shops that I might neglected otherwise.  ",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      id: 5,
      name: "Mani Ryan",
      job: "Neighborhood Terror",
      text: "hiiiiiissssssssss",
      image: "https://i.scdn.co/image/ab6761610000e5ebd5100eebd11d8d4aa8b13da6",
    },
    {
      id: 6,
      name: "John Brian",
      job: "Truck Driver",
      text: "As a person who has no time for anything, this is the perfect app for me",
      image:
        "https://media.istockphoto.com/id/1286810719/photo/smiling-cheerful-young-adult-african-american-ethnicity-man-looking-at-camera-standing-at.jpg?s=170667a&w=0&k=20&c=oObedgGxhaFI3532xf26RVTNJ401IP85neHSOLe2CTk=",
    },

    {
      id: 7,
      name: "Caroline Kang",
      job: "Web Developer",
      text: "All Smiles",
      image: Randy,
    },
  ];

  return (
    <div className="container my-24 mx-auto md:px-6 lg:px-8 bg-gray-300 dark:bg-gray-900">
      <section className="mb-32 text-center">
        <h2 className="mb-4 pb-4 p-4 text-center text-3xl font-bold dark:text-white">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mb-6 lg:mb-8">
              <div className="relative block rounded-lg mr-4 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-200">
                <div className="p-6">
                  <div className="text-center">
                    <div className="flex items-center flex-wrap">
                      {" "}
                      <div className="relative inline-block rounded-full overflow-hidden w-24 h-24 shadow-md mb-2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col justify-center ml-2 sm:ml-4 md:ml-6 lg:ml-8">
                        {" "}
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
                      </div>
                    </div>
                    <p className="overflow-hidden h-16">{testimonial.text}</p>
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
