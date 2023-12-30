"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import UiButton from "./ui/UiButton";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import { Input, Textarea } from "@nextui-org/react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify";

interface Props {}

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);
  useEffect(() => emailjs.init("4CuovlSTF497J51L5"), []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const serviceId = "my-cv-contact";
    const templateId = "contact-template";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, data);
      toast(
        "Email sent successfully, I will be contacting you as soon as possible. Thanks for your interest.", {
          type: "success",
          theme: "dark",
          position: "bottom-right",
          bodyClassName: "text-xs"
        }
      )
    } catch (error) {
      toast(
        "Error sending email, try again later or send a message to ign.portigliatti@gmail.com", {
          type: "error",
          theme: "dark",
          position: "bottom-right",
        }
      )
    } finally {
      setLoading(false);
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="animate-fade flex flex-col md:flex-row w-full sm:max-w-[900px] backdrop-blur-xl md:py-12 p-9  hover:border-white/10 duration-500 max-w-[360px] items-center justify-center gap-4 md:gap-7 rounded-lg border border-stone-800/10">
      <h1
        className="pointer-events-none hidden md:flex titles items-start text-xl md:text-2xl text-lime-5000 "
        style={{ textOrientation: "upright", writingMode: "sideways-lr" }}
      >
        contact
      </h1>

      <h1 className="md:hidden flex titles items-start text-xl md:text-2xl text-lime-5000 ">
        contact
      </h1>
      <div className="flex gap-2 flex-col w-full items-center md:items-start">
        <h6 className="text-xs md:text-sm">you can find me here</h6>

        <div className="flex flex-row gap-1">
          <a target="_blank" href="https://www.linkedin.com/in/ignacio-portigliatti-0702051b0/">
            <UiButton
              variant="bordered"
              color="lime"
              label="linkedin"
              size="xs"
              endContent={<SiLinkedin className="md:w-5 md:-5" />}
            />
          </a>
          <a target="_blank" href="https://github.com/ignacioportigliatti/maxter-media">
            <UiButton
              variant="bordered"
              color="lime"
              label="github"
              size="xs"
              className="w-full"
              endContent={<SiGithub className="md:w-5 md:-5" />}
            />
          </a>
          <a
            href="
            mailto:ign.portigliatti@gmail.com
            "
          >
            <UiButton
              variant="bordered"
              color="lime"
              label="email"
              size="xs"
              endContent={<AiOutlineMail className="md:w-5 md:-5" />}
            />
          </a>
        </div>
        <p className="text-xs md:text-sm text-center md:text-start mt-3 text-white">
          or if you want, you can send me a message here.
        </p>
        <form
          className="flex mt-1 flex-col gap-1 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}
          <Input
            variant="bordered"
            classNames={{
              inputWrapper:
                "border hover:!border-white/40 duration-300 rounded-md focus-within:!border-lime-500",
            }}
            placeholder="your name"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-xs text-red-500">This field is required</span>}
          <Input
            type="email"
            variant="bordered"
            classNames={{
              inputWrapper:
                "border hover:!border-white/40 duration-300 rounded-md focus-within:!border-lime-500",
            }}
            placeholder="your email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-xs text-red-500">This field is required</span>}
          <Textarea
            variant="bordered"
            classNames={{
              inputWrapper:
                "border hover:!border-white/40 duration-300 rounded-md focus-within:!border-lime-500",
            }}
            placeholder="your message"
            {...register("message", { required: true })}
          />
          {errors.message && <span className="text-xs text-red-500">This field is required</span>}

          <UiButton
            type="submit"
            label="send"
            size="md"
            color="lime"
            variant="bordered"
            endContent={<AiOutlineSend className="md:w-5 md:-5" />}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
