import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full pt-8 h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="py-3 text-4xl sm:text-7xl font-bold text-primary">
          Hanif Rizky Noegroho
        </h1>
        <h1 className="py-1 text-1xl sm:text-3xl font-bold text-primary">
          Full Stack Developer
        </h1>
        <p className="text-primary py-4 max-w-[700px]">
          I am a bachelor's student at the University of Toronto, St. George,
          double majoring in Computer Science and Environmental Studies,
          finishing my degree program in June 2024. I possess a versatile
          background in full stack software development. Feel free to take a
          look at my projects on this website!
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="border-primary border-2 px-6 py-3 my-2 flex items-center hover:border-accent duration-200">
              Explore <HiArrowNarrowRight className="ml-2" />{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
