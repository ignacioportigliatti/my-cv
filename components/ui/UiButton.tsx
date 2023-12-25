'use client'

import React from "react";
import { Button, NextUIProvider, extendVariants } from "@nextui-org/react";
import { AiOutlineUser } from "react-icons/ai";

interface UiButtonProps {
  label: string;
  variant: "bordered" | "light" | "shadow" | "flat" | "solid" | "faded" | "ghost" | undefined;
  color?: "lime" | "orange" | "violet" | "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  size?: "xs" | "md" | "xl" | undefined;
  className?: string;
  disabled?: boolean;
}

const MyButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      lime: "text-white hover:border-lime-500 hover:bg-lime-500/50 transition duration-300",
      orange: "bg-[#ff8c00] text-[#fff]",
      violet: "bg-[#8b5cf6] text-[#fff]",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-unit-2 min-w-unit-12 border h-unit-6 text-tiny gap-unit-1 rounded-lg",
      md: "px-unit-4 min-w-unit-20 border h-unit-10 p-2 text-xs md:text-small gap-unit-2 rounded-lg",
      xl: "px-unit-8 min-w-unit-28 h-unit-14 text-large gap-unit-4 rounded-lg",
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    size: "md",
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      isDisabled: true,
      color: "lime",
    },
  ],
});

const UiButton = (props: UiButtonProps) => {
  const { label, color, variant, startContent, endContent, size, type, className, disabled } = props;

  return (
    <div>

      <div className="flex gap-4 items-center">
        <MyButton
          className="w-full"
          type={type}
          color={color}
          variant={variant}
          size={size ? size : undefined}
          startContent={startContent ? startContent : undefined}
          endContent={endContent ? endContent : undefined}
          disabled={disabled}
        >
          {label}
        </MyButton>
      </div>

    </div>
  );
};

export default UiButton;
