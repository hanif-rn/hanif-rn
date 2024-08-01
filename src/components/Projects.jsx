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
            <div className="opacity-0 group-hover:opacity-100 p-4">
              <span className="text-center text-2xl font-bold text-white tracking-wider my-3">
                Courrier Tracking App
              </span>
              <p className="text-white">Technologies: Google Maps API</p>
              <p className="text-white">
                Languages: PHP, JavaScript, CSS, MySQL
              </p>
              <ul className="text-white list-disc pl-5">
                <li>
                  Web application tracking workers’ whereabouts and status of
                  orders made by customers
                </li>
                <li>
                  Geotagging features using Google Maps API for location mapping
                </li>
                <li>
                  Secure uploading and storage of image files through the
                  application
                </li>
              </ul>
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
            <div className="opacity-0 group-hover:opacity-100 p-4">
              <span className="text-center text-2xl font-bold text-white tracking-wider">
                MIPS Assembly Breakout
              </span>
              <p className="text-white">Technologies: MARS</p>
              <p className="text-white">Languages: Assembly</p>
              <ul className="text-white list-disc pl-5">
                <li>ATARI Breakout clone created purely with Assembly</li>
                <li>
                  With additional features such as multiple balls and
                  unpredictable physiscs mode
                </li>
              </ul>
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
            <div className="opacity-0 group-hover:opacity-100 p-4">
              <span className="text-center text-2xl font-bold text-white tracking-wider">
                Maze Game
              </span>
              <p className="text-white">Technologies: JavaFX</p>
              <p className="text-white">Languages: Java, CSS</p>
              <ul className="text-white list-disc pl-5">
                <li>
                  A maze game, emphasizing adherence to Clean Architecture and
                  SOLID Principles.
                </li>
                <li>
                  Back-end for maze manipulation using 2D arrays and CSV files
                  in Java.
                </li>
                <li>
                  Front-end interface development using JavaFX, with CSS for
                  styling.
                </li>
              </ul>
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
              <p className="text-white">
                Technologies: JavaFX, XSSFSheet Framework
              </p>
              <p className="text-white">Languages: Java, CSS</p>
              <ul className="text-white list-disc pl-5">
                <li>
                  Database System built for an organization under the Social
                  Welfare Ministry of Indonesia
                </li>
                <li>
                  Enables secure storage of data on families requiring financial
                  assistance
                </li>
                <li>Automated table, graph, and excel file generation</li>
              </ul>
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
