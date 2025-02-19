import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/type";

const getBgVariant = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "outline":
      return "bg-transparent border border-neutral-300 border-[0.5px]";
    case "success":
      return "bg-green-500";
    default:
      return "bg-[#0286ff]";
  }
};

const getTextVarient = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};
const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`w-full rounded-full flex flex-row p-3 items-center justify-center shadow-md shadow-neutral-400/70
   ${getBgVariant(bgVariant)} ${textVariant} ${className}`}
      onPress={onPress}
      {...props}
    >
      {IconLeft && <IconLeft />}
      {IconRight && <IconRight />}
      <Text className={`text-lg font-bold ${getTextVarient(textVariant)}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
