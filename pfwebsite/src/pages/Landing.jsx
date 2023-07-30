import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import greenwave from "../assets/greenwave.svg";
import Nav from "../components/Nav.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutUs from "../components/AboutUs";
import topblackwave from "../assets/topblackwave.svg";
import bottomblackwave from "../assets/bottomblackwave.svg";
import Categories from "../components/Categories.jsx";
import volunteer from '../assets/volunteer.svg'


const Landing = () => {
  const navigate = useNavigate();

  const words = ["Health", "Nutrition", "Fitness"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index) => (index + 1) % words.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="w-full min-h-[80vh] bg-[#D3F199]">
        <Nav />
        <HeroSection />
      </div>
      <span className="">
        <img className="w-[100vw] translate-y-[-7%]" src={greenwave} alt="" />
      </span>
      <AboutUs />
      <span className="">
        <img className="w-[100vw]" src={topblackwave} alt="" />
      </span>
      <Categories />
      <span className="">
        <img className="w-[100vw]" src={bottomblackwave} alt="" />
      </span>
      <div className="w-full translate-y-[20vh] min-h-[80vh]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center space-x-12 justify-between py-8 md:py-16">
            <div className="md:w-[50%] text-left">
              <h1 className="font-Bebas text-[#6b6eab] text-[1.75rem] mb-4">
                Volunteer
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
              <button className="text-[1.5rem] h-[4rem] hover:shadow-cool active:shadow-cool2 border-2 border-[#7779A4]  transition-all duration-300 bg-[#7779A4] rounded-[.625rem]   w-[25%] flex items-center justify-center font-Bebas text-white">
                Become a Voluteer
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={volunteer}
                draggable="false"
                alt="description_of_the_image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
