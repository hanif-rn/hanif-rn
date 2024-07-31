import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-scroll";

const Navibar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-gray-300">
      <div>
        <h1 className="text-3xl text-primary-content">Hanif Rizky Noegroho</h1>
      </div>
      <ul className="hidden md:flex">
        <li className="text-xl text-primary-content hover:text-white hover:text-2xl duration-100">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-xl text-primary-content hover:text-white hover:text-2xl duration-100">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-xl text-primary-content hover:text-white hover:text-2xl duration-100">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="text-xl text-primary-content hover:text-white hover:text-2xl duration-100">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-secondary-content flex flex-col justify-center items-center"
        }
      >
        <li className="py-5 text-3xl text-secondary">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-5 text-3xl text-secondary">
          <Link
            onClick={handleClick}
            to="about-title"
            smooth={true}
            duration={500}
            offset={-150}
          >
            About
          </Link>
        </li>
        <li className="py-5 text-3xl text-secondary">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Projects
          </Link>
        </li>
        <li className="py-5 text-3xl text-secondary">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="bg-[#0077b5] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/hanif-noegroho-7ba8b0233/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="bg-[#171515] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/hanif-rn"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="bg-[#26aa24] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:hanifrizky.noegroho@gmail.com"
            >
              E-Mail <MdOutlineMailOutline size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navibar;
