import React from "react";
import MasRaya from "../assets/mapsss.png";
import mips from "../assets/breakoutss.png";
import mazes from "../assets/mazess.png";
import pkh from "../assets/eval.png";
import mipscode from "../assets/breakout.asm";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-fit min-h-screen sm:h-screen">
      <div className="max-w-[1234px] mx-auto p-4 pt-6 flex flex-col justify-center w-full h-full">
        <div className="pb-8 px-4">
          <h1
            name="projects-title"
            className="text-primary text-4xl font-bold inline border-b-4"
          >
            Past Projects
          </h1>
          <p className="text-secondary text-xl py-3">
            Check out my past projects! Swipe to see more and click to view
            details!
          </p>
        </div>
        <div class="carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
          <div
            style={{ backgroundImage: `url(${MasRaya})` }}
            className="carousel-item shadow-lg shadow-[#171629] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-center text-2xl font-bold text-white tracking-wider">
                Courrier Tracking App
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/hanif-rn/smasraya-kurir">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${mips})` }}
            id="slide2"
            className="carousel-item shadow-lg shadow-[#171629] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-center text-2xl font-bold text-white tracking-wider">
                MIPS Assembly Breakout
              </span>
              <div className="pt-8 text-center">
                <a href={mipscode}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mazes})` }}
            className="carousel-item shadow-lg shadow-[#171629] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-center text-2xl font-bold text-white tracking-wider">
                Maze Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/CSC207-2022F-UofT/course-project-wasted-potential">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${pkh})` }}
            className="carousel-item shadow-lg shadow-[#171629] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-center text-2xl font-bold text-white tracking-wider">
                PKH Database System
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/hanif-rn/pkh-database-system">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
