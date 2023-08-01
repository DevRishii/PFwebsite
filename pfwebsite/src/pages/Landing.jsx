import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import greenwave from "../assets/greenwave.svg";
import Nav from "../components/Nav.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutUs from "../components/AboutUs";
import topblackwave from "../assets/topblackwave.svg";
import bottomblackwave from "../assets/bottomblackwave.svg";
import Categories from "../components/Categories.jsx";
import Volunteer from "../components/Volunteer";
import footer from "../assets/footer.svg";

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
      <Volunteer />
        <img className="max-w-[30vw] " src={footer} alt="" />
      <footer className="w-full  min-h-[80vh] bg-gradient-to-r from-[#FFF8E3] via-[#FFF8E3] to-[#F1F9D9]">
        <div className="">
          <div className="container z-2 bg-transparent mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center space-x-12 justify-between py-8 md:py-16"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
