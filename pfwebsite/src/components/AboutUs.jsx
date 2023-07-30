import React from "react";
import logo from "../assets/logo.svg";

const AboutUs = () => {
  return (
    <>
      <div className="w-full translate-y-[-20vh] min-h-[80vh]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center space-x-12 justify-between py-8 md:py-16">
            <div className="md:w-1/2 scale-110">
              <img
                src={logo}
                draggable="false"
                alt="description_of_the_image"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-[50%] text-left">
              <h1 className="font-Bebas text-[#1C9EA6] text-[1.75rem] mb-4">
                About Us
              </h1>
              <h1 className="text-4xl md:leading-[4rem] font-Inter font-[800] w-[70%]  md:text-5xl mb-8">
                Helping People In Need Around Us
              </h1>
              <h2 className="text-2xl md:text-[1.5rem] text-[#636161] w-[80%] font-semibold mb-12">
                At Prescription Fitness, we believe in the power of health and
                wellness as a catalyst for change. Our mission is to provide
                accessible fitness and health resources to marginalized
                communities.
              </h2>
              <div className="space-y-4">
                <li className="rounded-[999px] bg-[#6B6EAB] w-[2rem] h-[2rem]"></li>
                <li className="rounded-[999px] bg-[#221E55] w-[2rem] h-[2rem]"></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
