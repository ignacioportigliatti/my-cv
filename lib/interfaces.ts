import { AccordionItemIndicatorProps } from "@nextui-org/react";
import { IconType } from "react-icons";

interface ExperienceTechStack {
    icon: IconType,
    label: string,
}

export interface ExperienceJob {
    title: string,
      company: string,
      companyLogoSrc: string,
      date: string,
      description: string,
      techStack: ExperienceTechStack[],
      imgClassName?: string,
      indicator?: ({ isOpen }: AccordionItemIndicatorProps) => React.JSX.Element,
      link?: string,
    }

