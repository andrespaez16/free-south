import React from "react";
// import Typed from "react-typed";
import "./hero.css";
import logoFree from "../logofree.png";

const Hero = () => {
  return (
    <div className="text-white" id="home">
      <div className="max-w-[700px] max-h-[550px] mt-[0px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        {/* <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
           test
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          {t("home.subtitle")}
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={[t("home.private"),t("home.confortable"), t("home.safe")]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
               {t("home.trips")}
          </p>
        </div> */}
        {/* <p className="text-[#ffffff] font-bold p-2">
test2
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
        <a href="https://api.whatsapp.com/send?phone=13473197413&text=Hello I want to make a reservation!!">
test3
          </a>
        </button> */}
      </div>
      <img
                        className="h-16 image-logo"
                        src={logoFree}
                        alt="Your Company"
                      />
    </div>
  );
};

export default Hero;
