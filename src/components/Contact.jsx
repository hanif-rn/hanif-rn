import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center p-4 px-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/eb40d986-8fcc-40b5-8ff6-6cbec3d09ae4"
        className="flex flex-col max-w-[600px] w-full px-4"
      >
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 text-primary">
            Contact Me!
          </h1>
          <p className="text-1xl pt-3 text-secondary">
            Use the form below or e-mail me at hanifrizky.noegroho@gmail.com
          </p>
        </div>
        <input
          className="border rounded p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="border rounded my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="border rounded p-2"
          name="message"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button className="border-secondary hover:border-primary border-2 px-6 py-3 my-2  hover:text-primary duration-200">
          Send
        </button>
      </form>
      <div className="lg:hidden flex flex-row items-center space-x-4 my-4">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://www.linkedin.com/in/hanif-noegroho-7ba8b0233/"
        >
          <FaLinkedin size={30} className="text-primary hover:text-accent" />
        </a>
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://github.com/hanif-rn"
        >
          <FaGithub size={30} className="text-primary hover:text-accent" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
