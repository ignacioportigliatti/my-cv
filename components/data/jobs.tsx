import { AccordionItemIndicatorProps } from "@/lib/types"
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
  SiMongodb,
} from "react-icons/si";
import Link from "next/link";
import { ExperienceJob } from "@/lib/interfaces";


export const jobs: ExperienceJob[] = [
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