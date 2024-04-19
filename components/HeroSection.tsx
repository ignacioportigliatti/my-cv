import Link from "next/link";
import React from "react";
import { PiHandWavingLight } from "react-icons/pi";
import {
  AiFillFileZip,
  AiFillQuestionCircle,
  AiOutlineFileText,
  AiOutlineFileZip,
  AiOutlineOrderedList,
  AiOutlineQuestion,
} from "react-icons/ai";
import UiButton from "./ui/UiButton";

interface Props {}

const HeroSection = (props: Props) => {
  return (
    <div className="animate-fade flex flex-col sm:max-w-[900px] backdrop-blur-xl md:py-12 md:px-0 p-9  hover:border-white/10 duration-500 max-w-[360px] items-center justify-center gap-7 rounded-lg border border-stone-800/10">
      <div className="w-full flex flex-col gap-2 text-center">
        <h1 className="text-[29px] md:text-6xl leading-tight md:leading-tight">
          Hi{" "}
          <PiHandWavingLight className="hover:animate-wiggle-more align-top inline-block" />{" "}
          {`I'm`}{" "}
          <Link
            href="/about-me"
            className="font-outline-2 text-transparent hover:text-lime-500 transition duration-300"
          >
            Ignacio Portigliatti
          </Link>
          , a Fullstack Software Developer from{" "}
          <span className="bg-clip-text bg-white hover:bg-gradient-to-b hover:text-transparent hover:from-sky-500 hover:via-yellow-200 hover:via-60% hover:from-40% hover:to-80% duration-300 transition-colors hover:to-sky-500">
            Argentina
          </span>
        </h1>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm">
        <Link href="/about-me" className="animate-flip-down animate-delay-300 opacity-60 hover:opacity-100">
          <UiButton
            label="about me"
            size="md"
            color="lime"
            variant="bordered"
            endContent={<AiFillQuestionCircle className="md:w-5 md:-5" />}
          />
        </Link>
        <Link href="/projects" className="animate-flip-up animate-duration-500 animate-delay-500 opacity-60 hover:opacity-100">
          <UiButton
            label="projects"
            size="md"
            color="lime"
            variant="bordered"
            endContent={<AiOutlineFileZip className="md:w-5 md:-5" />}
          />
        </Link>
        <Link href="/experience" className="animate-flip-down animate-delay-700 opacity-60 hover:opacity-100">
          <UiButton
            label="experience"
            size="md"
            color="lime"
            variant="bordered"
            endContent={<AiOutlineOrderedList className="md:w-5 md:-5" />}
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
