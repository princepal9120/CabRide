import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";

const SignUp = () => {
  const [form ,setForm] =useState({
    name: '',
    email: '',
    password: '',
  });
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="realtive w-full h-[250px]">
          <Image source={images.signUpCar} className="w-full h-[250px] z-0" />
          <Text className="text-center text-2xl font-semibold font-JakartaSemiBold absolute bottom-5 left-5 right-5">Create Your Account</Text>
        </View>
        <View>
          <InputField 
          label="Name"
          placeholder="Enter your name"
          icon={icons.person}
          value={form.name}
          onChangeText={(value) => setForm({...form, name: value})}
          />
          <InputField 
          label="Email"
          placeholder="Enter your email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value) => setForm({...form, email: value})}
          />
          <InputField 
          label="Password"
          placeholder="Enter your password"
          icon={icons.lock}
          value={form.password}
          onChangeText={(value) => setForm({...form, password: value})}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
