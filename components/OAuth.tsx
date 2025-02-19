import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
    const handleGooglSignIn =async () => {
        console.log("Google Sign In");
    }
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-2 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-300" />
        <Text className="text-lg">or</Text>
        <View className="flex-1 h-[1px] bg-general-300" />
      </View>
      <CustomButton
        title="Login With Google"
        className="mt-4 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-6 h-6 mx-2"
          />
          
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGooglSignIn}
      />
    </View>
  );
};

export default OAuth;
