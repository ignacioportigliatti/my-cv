"use client";

import React from "react";
import { Accordion, AccordionItem, NextUIProvider } from "@nextui-org/react";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAmazonaws,
  SiCss3,
  SiElementor,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiWordpress,
  SiFramer,
  SiReacthookform,
  SiMongodb,
} from "react-icons/si";
import Link from "next/link";
import { AiOutlineContacts, AiOutlineMail } from "react-icons/ai";
import { ExperienceJob } from "@/lib/interfaces";

interface Props {}

type AccordionItemIndicatorProps = {
  isOpen?: any; // Make isOpen optional
};

const Experience = (props: Props) => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 accordionItem rounded-lg duration-300 transition h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const jobs: ExperienceJob[] = [
    {
      title: "Looking for a new experience",
      company: "XXXX",
      imgClassName: "rounded-full",
      indicator: ({ isOpen }: AccordionItemIndicatorProps) =>
        isOpen ? (
          <Link
            className="p-1  rotate-90 text-xs opacity-50 hover:opacity-100 duration-300 hover:bg-lime-500/50 hover:border-lime-500 hover:text-white border rounded-md flex items-center gap-1"
            href="/contact"
          >
            contact me
          </Link>
        ) : (
          <Link
            className="p-1 text-xs opacity-50 hover:opacity-100 duration-300 hover:bg-lime-500/50 hover:border-lime-500 hover:text-white border rounded-md flex items-center  gap-1"
            href="/contact"
          >
            contact me
          </Link>
        ),
      companyLogoSrc: "https://dummyimage.com/32x32.png/FFF/324E08&text=...",
      date: "Present - ꝏ",
      description: `I'm thrilled to embark on a new coding adventure and continue my growth as a developer. If you're impressed with my work, please feel free to reach out, and I'd love to connect with you.`,
      techStack: [
        { icon: SiJavascript, label: "Next.js" },
        { icon: SiNextdotjs, label: "Next.js" },
        { icon: SiReact, label: "React" },
        { icon: SiTailwindcss, label: "Tailwind CSS" },
        { icon: SiRedux, label: "Redux" },
        { icon: SiPrisma, label: "Prisma" },
        { icon: SiAmazonaws, label: "Amazon AWS" },
        { icon: SiFramer, label: "Framer Motion" },
        { icon: SiMongodb, label: "MongoDB" },
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Maxter Descargas",
      companyLogoSrc: "/img/maxter-logo.png",
      date: "June 2023 - September 2023",
      description: `I've dedicated the past two years to honing my skills in both Frontend and Backend development, so I was contacted by an enterprise to make this project as a job and also as my dissertation: a comprehensive private streaming platform for videos and photos. If you'd like to learn more about the work and the tech used, I'd be happy to discuss it with you.`,
      indicator: ({ isOpen }: AccordionItemIndicatorProps) =>
        isOpen ? (
          <a
            className="p-1  rotate-90 text-xs opacity-50 hover:opacity-100 duration-300 hover:bg-lime-500/50 hover:border-lime-500 hover:text-white border rounded-md flex items-center gap-1"
            href="https://descargas.maxterproducciones.com.ar/client?code=ARAGROUP-0180-1410"
            target="_blank"
          >
            go to project
          </a>
        ) : (
          <a
            className="p-1 text-xs opacity-50 hover:opacity-100 duration-300 hover:bg-lime-500/50 hover:border-lime-500 hover:text-white border rounded-md flex items-center  gap-1"
            href="https://descargas.maxterproducciones.com.ar/client?code=ARAGROUP-0180-1410"
            target="_blank"
          >
            go to project
          </a>
        ),
      techStack: [
        { icon: SiNextdotjs, label: "Next.js" },
        { icon: SiReact, label: "React" },
        { icon: SiTailwindcss, label: "Tailwind CSS" },
        { icon: SiRedux, label: "Redux" },
        { icon: SiPrisma, label: "Prisma" },
        { icon: SiAmazonaws, label: "Amazon AWS" },
      ],
    },
    {
      title: "Wordpress Developer",
      company: "XY-Sites",
      companyLogoSrc: "/img/xysites-logo.png",
      date: "August 2019 - December 2022",
      description: `I have a solid background as a CMS WordPress Developer at XY-Sites, where I've had the privilege of creating diverse websites for clients worldwide. My expertise primarily revolves around using Elementor for dynamic page building and implementing custom HTML and CSS elements to meet client-specific requirements.`,
      techStack: [
        { icon: SiWordpress, label: "Wordpress" },
        { icon: SiElementor, label: "Elementor" },
        { icon: SiCss3, label: "CSS3" },
        { icon: SiHtml5, label: "HTML5" },
        { icon: SiJavascript, label: "JavaScript" },
      ],
    },
    {
      title: "Graphic Designer / Video Editor",
      company: "Maxter Producciones",
      companyLogoSrc: "/img/maxter-logo.png",
      date: "May 2014 - July 2019",
      description: `I've also served as a Graphic Designer and Video Editor at Maxter Producciones, a company specializing in video and photo productions, with a primary focus on Student Tourism in my hometown of Villa Carlos Paz, Argentina. My role involved crafting visually engaging content to cater to a diverse clientele.`,
      techStack: [
        { icon: SiAdobeaftereffects, label: "After Effects" },
        { icon: SiAdobeillustrator, label: "Illustrator" },
        { icon: SiAdobephotoshop, label: "Photoshop" },
        { icon: SiAdobepremierepro, label: "Premiere Pro" },
      ],
    },
  ];


  return (
    <div className="rounded-lg border border-transparent hover:border-white/10 duration-300 animate-fade flex md:flex-row flex-col gap-6 md:gap-4 h-full justify-start items-center md:max-w-[900px]  sm:p-9 w-full">
      <h1
        className="pointer-events-none hidden md:flex titles items-start text-xl md:text-2xl text-lime-5000 "
        style={{ textOrientation: "upright", writingMode: "sideways-lr" }}
      >
        experience
      </h1>

      <h1 className="md:hidden flex titles items-start text-xl md:text-2xl text-lime-5000 ">
        experience
      </h1>

      <div className="flex flex-col w-full">
        <Accordion
          showDivider={false}
          className="flex flex-col gap-1 w-full"
          variant="light"
          itemClasses={itemClasses}
        >
          {jobs.map((job, index) => (
            <AccordionItem
              key={`index-${index}`}
              aria-label={job.title}
              indicator={job.indicator ? job.indicator : undefined}
              startContent={
                <img
                  alt={`${job.company}`}
                  className={job.imgClassName ? job.imgClassName : ""}
                  src={job.companyLogoSrc}
                />
              }
              subtitle={
                <p className="flex text-xs text-lime-500">
                  {job.company} / {job.date}
                </p>
              }
              classNames={{ title: "text-white text-sm leading-tight" }}
              className={`animate-flip-up h-full hover:opacity-100 opacity-70 duration-300 border border-white/10 backdrop-blur-xl rounded-md`}
              title={job.title}
            >
              <div className="p-2 flex flex-col gap-3  items-start justify-between">
                <p className="text-xs">{job.description}</p>
                <div className="border bg-slate-900 border-transparent duration-300 hover:border-lime-500/50 p-1 rounded-md">
                  <div className="flex items-center gap-1">
                    <p className="text-[10px]">Stack</p>
                    {job.techStack.map((tech, index) => (
                      <div key={index} className="relative group">
                        <tech.icon className="navBarIcon !w-4 !h-4" />
                        <div className="absolute -inset-y-12 bg-black w-max h-max z-10 border border-lime-500 text-lime-500 backdrop-blur-xl text-[10px] opacity-0 group-hover:opacity-100  px-1 rounded-md bottom-full -left-1/2 transform -translate-x-1/4 translate-y-1/2 transition-opacity duration-300">
                          {tech.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Experience;
