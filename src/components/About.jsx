import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-fit min-h-screen sm:h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <h1
              name="about-title"
              className="text-primary text-4xl font-bold inline border-b-4"
            >
              About
            </h1>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-8 sm:px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right">
            <h1 className="text-3xl font-bold inline text-secondary">
              Hello! My name is Hanif!
            </h1>
            <br></br>
            <h1 className="text-3xl font-bold inline">Get to know who I am!</h1>
          </div>
          <div>
            <p>
              Having lived in multiple countries, stepping out of my comfort
              zone and quickly adapting to new environments is second nature. I
              am a fast learner with many interests and a strong sense of
              motivation. Be it a new programming language or a new musical
              instrument and I will be sure to master it!
            </p>
            <p className="pt-2 my-5">
              In full stack software development, I've created projects ranging
              from video games to a robust database system for an organization
              under the Indonesian Ministry of Social Affairs. Take a look at
              them on this website, or click{" "}
              <a
                className="text-primary"
                id="reslink"
                href="https://drive.google.com/file/d/1G9YtUfs9y2BseWpvIBdehUPvqS1Xq_0O/view?usp=drive_link"
              >
                here
              </a>{" "}
              for my resumé!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
