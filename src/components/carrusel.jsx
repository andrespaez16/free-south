import React from "react";
import sprinter from "../assets/amiri5.jpg";
import suburban from "../assets/balen5.jpg";
import tesla from "../assets/palm5.jpg";
import escalade from "../assets/gucci5.jpg";
import off from "../assets/prada5.jpg";
import "./carrusel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export const data = [
  {
    image: escalade,
  },
  {
    image: off,
  },
  {
    image: tesla,
  },
  {
    image: suburban,
  },
  {
    image: sprinter,
  },
];

const Carrusel = () => {
  return (
    <div className="w-full bg-white sm:grid-cols-4" id="fleet">
      <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold text-decoration-line: underline">
      </h1>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          430: {
            width: 430,
            slidesPerView: 1,
          },

          1920: {
            width: 1920,
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item, key) => (
          <SwiperSlide key={key}>
            <div className="w-[250px]">
              <img className={item.class} src={item.image} alt={item.image}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel;
