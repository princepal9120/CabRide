import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        {" "}
        <Text className="text-md font-semibold font-Jakarta">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#fefbf1] rounded-full" />}
        activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0287FF] rounded-full"/>}
        onIndexChanged={(index)=>setActiveIndex(index)}
      ></Swiper>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
