"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { jobs } from "./data/jobs";



const Experience = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 accordionItem rounded-lg duration-300 transition h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  return (
    <div className="rounded-lg border border-transparent hover:border-white/10 duration-300 animate-fade flex md:flex-row flex-col pt-4 gap-4 h-full justify-start items-center md:max-w-[900px]  sm:p-9 w-full">
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
