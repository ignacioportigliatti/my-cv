import Link from "next/link";
import React from "react";
import {
  AiOutlineFileZip,
} from "react-icons/ai";

import UiButton from "./ui/UiButton";
import { techStackIconArray } from "./ui/techStackIconArray";

interface Props {}

const AboutMe = (props: Props) => {
  return (
    <div className="animate-fade flex flex-col md:max-w-[900px] md:flex-row px-6 py-12 md:py-12 gap-5 backdrop-blur-xl hover:border-white/10 duration-1000 max-w-full sm:max-w-lg items-start justify-center rounded-lg border border-stone-800/10">
      <div className="animate-fade-right flex flex-col w-full md:w-2/3 gap-2 items-center justify-center">
        <img
          className=" w-3/4 sm:w-1/2 md:w-full object-contain rounded-lg"
          src="/img/foto-perfil.jpg"
          alt="Photo"
        />
        <div className="flex w-full flex-col md:flex-row text-2xl items-center justify-center gap-2">
          <div className="my-auto p-1  rounded-lg flex flex-row md:flex-col justify-center items-center gap-[2px] text-xs opacity-60 hover:opacity-100 hover:text-lime-500 duration-300 hover:border-lime-500 cursor-help">
            <p className=" leading-none">Tech</p>
            <p className=" leading-none">Stack</p>
          </div>

          <div className="flex gap-2 flex-wrap items-center justify-start">
            {techStackIconArray.map((item, index) => (
              <div key={index} className="relative group">
                <item.icon className="navBarIcon" />
                <div className="absolute -inset-y-12 bg-black/40 w-max h-max z-10 border border-lime-500 text-lime-500 backdrop-blur-xl text-xs opacity-0 group-hover:opacity-100 py-1 px-2 rounded-md bottom-full -left-1/2 transform -translate-x-1/4 translate-y-1/2 transition-opacity duration-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="animate-fade-left flex flex-auto flex-col w-full text-center md:text-start items-center md:items-start justify-center h-full gap-4 rounded-lg">
        <div className="flex gap-3 flex-col h-full">
        <h1 className="flex titles items-start justify-center md:justify-start w-full text-xl md:text-2xl text-lime-5000 ">
        about me
      </h1>
          <div className="flex flex-col md:items-start items-center lg:flex-row gap-2">
          
            <h2 className="text-3xl flex-none md:text-[26px] font-normal leading-none">
              Ignacio Portigliatti
            </h2>
            <h6 className="text-xs flex-none  w-max px-2 p-1 text-lime-950 bg-lime-500 rounded-lg">
              Fullstack Developer
            </h6>
          </div>

          <div className="leading-snug text-sm space-y-2">
            <p className="">
              I like to work with both Frontend & Backend technologies, having
              knowledge in{" "}
              <b>
                JavaScript, ReactJS, Tailwind CSS, NextJS, Redux, AWS, Prisma,
                Hardhat{" "}
              </b>{" "}
              and
              <b> ethers.js</b> among others.
            </p>
            <p>
              As a driven Fullstack Developer my goal is to be open to new
              opportunities and challenges that will allow me to constantly
              learn and grow as a professional.
            </p>
            <p>
              Strong communication skills in both <b>English</b> and{" "}
              <b>Spanish</b> {"(native)"}. I&apos;m eager to join a team that
              values innovation, creativity, and teamwork.
            </p>
          </div>
        </div>

        <Link
          href="/projects"
          className="animate-flip-up animate-delay-700 opacity-60 hover:opacity-100"
        >
          <UiButton
            label="projects"
            size="xs"
            color="lime"
            variant="bordered"
            endContent={<AiOutlineFileZip />}
          />
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
