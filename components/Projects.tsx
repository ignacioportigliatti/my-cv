'use client'

import { Image, NextUIProvider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { AiOutlineFileText, AiOutlineMail } from "react-icons/ai";
import {
  SiAmazonaws,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { techStackIconArray } from "./ui/techStackIconArray";

interface Props {}

const Projects = (props: Props) => {
  const projects = [
    {
      name: "Maxter Descargas",
      description: "Private streaming platform for videos and photos.",
      techStack: [
        { icon: SiTypescript, label: "Typescript" },
        { icon: SiNextdotjs, label: "Next.js" },
        { icon: SiReact, label: "React" },
        { icon: SiTailwindcss, label: "Tailwind CSS" },
        { icon: SiRedux, label: "Redux" },
        { icon: SiPrisma, label: "Prisma" },
        { icon: SiAmazonaws, label: "Amazon AWS" },
      ],
      github: "",
      link: "https://descargas.maxterproducciones.com.ar/client?code=ARAGROUP-0180-1410",
      image: "/img/projects/maxter-descargas.jpg",
    },
    {
      name: "Radetich DJ Presskit",
      description: "Deejay presskit for Radetich, argentinian DJ & Producer.",
      techStack: [
        { icon: SiTypescript, label: "Typescript" },
        { icon: SiNextdotjs, label: "Next.js" },
        { icon: SiReact, label: "React" },
        { icon: SiTailwindcss, label: "Tailwind CSS" },
      ],
      github: "",
      link: "https://radetich-presskit.vercel.app",
      image: "/img/projects/radetich.jpg",
    },
    {
      name: "More to come...",
      description: "Work in progress (:",
      techStack: techStackIconArray,
      github: "",
      link: "",
      image: "https://dummyimage.com/360x240.png/84CC16/324E08&text=...",
    },
  ];

  return (
    <div className="rounded-lg border border-transparent hover:border-white/10 duration-300 animate-fade flex md:flex-row flex-col gap-6 md:gap-4 h-full justify-start items-center md:max-w-[900px]  sm:p-9 w-full">
      <h1
        className="pointer-events-none hidden md:flex titles items-start text-xl md:text-2xl text-lime-5000 "
        style={{ textOrientation: "upright", writingMode: "sideways-lr" }}
      >
        projects
      </h1>

      <h1
        className="md:hidden flex titles items-start text-xl md:text-2xl text-lime-5000 "
      >
        projects
      </h1>

      <div className="grid grid-cols-1 max-w-max gap-4 md:grid-cols-3 p-2">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            key={`index-${index}`}
            className="animate-flip-down flex flex-col text-start p-3 h-auto justify-between opacity-50 duration-300 gap-2 hover:opacity-100 max-w-max rounded-lg border border-lime-500"
          >
            <div className="relative">
              <Image
                radius="md"
                alt={project.name}
                isZoomed
                className="h-full aspect-[3/2] object-cover z-0 w-full "
                src={project.image}
              />
              <div className="absolute bottom-0 bg-black/60 backdrop-blur-lg right-0 flex gap-1 p-2 rounded-md rounded-tr-none rounded-bl-none w-max">
                {project.techStack.map((tech, index) => (
                  <div key={index} className="relative group">
                    <tech.icon className="navBarIcon !w-full !h-full" />
                    <div className="absolute -inset-y-9 bg-black w-max h-max z-10 border border-lime-500 text-lime-500 backdrop-blur-xl text-[10px] opacity-0 group-hover:opacity-100  px-1 rounded-md bottom-full -left-1/2 transform -translate-x-1/4 translate-y-1/2 transition-opacity duration-300">
                      {tech.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex-auto flex h-1/4 flex-col gap-1 ">
              <h1 className="leading-none">{project.name}</h1>
              <p className="text-xs">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
