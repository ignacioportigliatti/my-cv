import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";
import UiButton from "./UiButton";
import Link from "next/link";

interface Props {}

const PersonalCard = (props: Props) => {
  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Image
            isZoomed
            isBlurred
            radius="md"
            className="w-14 h-14 rounded-md object-cover"
            src="/img/foto-perfil.jpg"
          />
          <div className="flex flex-col items-start justify-center">
           <Link href="/about-me">
           <h4 className="text-small font-semibold leading-none opacity-80 hover:opacity-100 duration-300 text-lime-500">
              Ignacio Portigliatti
            </h4>
              </Link>
            
           <Popover placement="bottom-start" shouldCloseOnBlur={false}>
            <PopoverTrigger>
            <h5 className="mt-1 cursor-pointer text-white opacity-80 hover:opacity-100 duration-300 text-xs tracking-tight leading-none">
              Villa Carlos Paz, Cordoba, Argentina
            </h5>
            </PopoverTrigger>
            <PopoverContent className="p-2 rounded-md bg-transparent border-white/30 border backdrop-blur-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54481.110975700234!2d-64.49973669999999!3d-31.412212949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6640d6777c71%3A0x75c24ab6cb121bed!2sVilla%20Carlos%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1696583810684!5m2!1ses!2sar" width="450" height="300" className="border-none" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </PopoverContent>
           </Popover>
    
          </div>
        </div>
        <Link href="/contact">
        <UiButton
          className=""
          color="lime"
          label="contact"
          size="xs"
          variant="bordered"
        />
        </Link>
      </CardHeader>
    </Card>
  );
};

export default PersonalCard;
