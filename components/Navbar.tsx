"use client";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineMail,
} from "react-icons/ai";
import PersonalCard from "./ui/PersonalCard";
import { usePathname } from "next/navigation";

interface Props {}

export const Navbar = (props: Props) => {

  const pathname = usePathname();
  const navItems = [
    { name: "home", link: "/" },
    { name: "about me", link: "/about-me" },
    { name: "projects", link: "/projects" },
    { name: "experience", link: "/experience" },
    { name: "contact", link: "/contact" },
  ];

  return (
    <div className=" top-0 w-full">
      <div className="flex items-center justify-between h-16 px-8 md:px-20">
        <div className="md:hidden flex">
          <Popover
            placement="bottom-start"
            triggerScaleOnOpen
            triggerType="menu"
          >
            <PopoverTrigger>
              <button>
                <AiOutlineMenu className="text-2xl" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="p-2 pr-6 bg-transparent border-white/30 border backdrop-blur-xl">
              <div className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <a className={`navBarItem`}>
                {item.name}{pathname === item.link ? <span className="animate-fade-up">.</span> : <span className="opacity-0">.</span>}
              </a>
            </Link>
          ))}
        </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="hidden md:flex">
          <Popover backdrop="blur" placement="bottom-start">
            <PopoverTrigger>
              <User
                as="button"
                name="Ignacio Portigliatti"
                description="Junior Software Developer"
                className="transition-transform"
                avatarProps={{
                  className: 'hidden',
                }}
              />
            </PopoverTrigger>
            <PopoverContent className="p-1 bg-transparent backdrop-blur-md border border-white/20 duration-300 hover:border-white/50">
              <PersonalCard />
            </PopoverContent>
          </Popover>
        </div>
        <div className="hidden md:flex justify-center gap-2 transition duration-1000 border border-transparent hover:border-lime-500 py-1 px-2 rounded-lg">
          {navItems.map((item, index) => (
            <Link href={item.link} className="navBarItem" key={index}>
              {item.name}{pathname === item.link ? <span className="animate-fade-up">.</span> : <span className="opacity-0">.</span>}
            </Link>
          ))}
        </div>

        <div className="flex gap-1">
          <a target="_blank" href="https://www.linkedin.com/in/ignacio-portigliatti-1b1b3b1b0/">
            <AiOutlineLinkedin className="navBarIcon" />
          </a>
          <a target="_blank" href="https://github.com/ignacioportigliatti/">
            <AiOutlineGithub className="navBarIcon" />
          </a>
          <a href="mailto:ign.portigliatti@gmail.com"><AiOutlineMail className="navBarIcon" /></a>
        </div>
      </div>
    </div>
  );
};
