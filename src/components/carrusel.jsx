import React from "react";
import sprinter from "../assets/amiri5.jpg";
import suburban from "../assets/balen5.jpg";
import tesla from "../assets/palm5.jpg";
import escalade from "../assets/gucci5.jpg";
import off from "../assets/prada5.jpg";
import "./carrusel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { FaSuitcase } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
// import { useTranslation } from "react-i18next";

export const data = [
  {
    image: escalade,
    name: "CADILLAC ESCALADE",
    class: "w-[800px] mx-auto mt-[90px] rounded-lg",
    passanger: "4-6",
    baggage: "4",
    text:"fleet.text_scalade_cars"
  },
  {
    image: off,
    name: "CADILLAC ESCALADE",
    class: "w-[800px] mx-auto mt-[90px] rounded-lg",
    passanger: "4-6",
    baggage: "4",
    text:"fleet.text_scalade_cars"
  },
  {
    image: tesla,
    name: "TESLA MODEL 3",
    class: "w-[600px] mx-auto  mt-[120px] rounded-lg mt-20",
    passanger: "1-3",
    baggage: "2",
    text:"fleet.text_tesla_car"
  },
  {
    image: suburban,
    name: "CHEVROLET SUBURBAN",
    class: "w-[550px]  mx-auto rounded-lg",
    passanger: "4-6",
    baggage: "4",
    text:"fleet.text_suv_car"
  },
  {
    image: sprinter,
    name: "MERCEDES-BENZ SPRINTER",
    class: "w-[500px] mx-auto rounded-lg",
    passanger: "8-14",
    baggage: "14",
    text:"fleet.text_sprinter_car"
  },
];

const Carrusel = () => {
//   const [t, i18n] = useTranslation("global");

  return (
    <div className="w-full bg-white  pt-32 px-4" id="fleet">
      <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold text-decoration-line: underline">
          {/* {t("fleet.title_fleet")} */}
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        // pagination={true}
      >
        {data.map((item, key) => (
          <SwiperSlide>
            <div className="max-w-[500px] mx-auto grid md:grid-cols-2">
              <img className={item.class} src={item.image} alt="/" />
              <div className="flex flex-col justify-center">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  {/* {item.name} */}
                </h1>
                <p className="text-[#00df9a] font-bold flex">
                {/* {t("fleet.passenger")} */}
                  <span className="text-[#00df9a] ml-5 flex-start ">
                    {/* {item.passanger} */}
                  </span>
                  <span className="mt-[3px] ml-2">
                    <FaUserAlt />
                  </span>
                </p>
                <p className="text-[#00df9a] font-bold flex">
                {/* {t("fleet.suitcases")} */}
                  <span className="text-[#00df9a] ml-5 flex-start ">
                    {/* {item.baggage} */}
                  </span>
                  {/* <span className="mt-[3px] ml-2">
                    <FaSuitcase />
                  </span> */}
                </p>
                <p className="text-[#00df9a] font-bold flex">
                {/* {t("fleet.pets")} */}
                  {/* <span className="mt-[3px] ml-2">
                    <FaDog />
                  </span> */}
                </p>
                <p>
                {/* {t(item.text)} */}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel;
