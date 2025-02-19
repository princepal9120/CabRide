import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
   
    email: "",
    password: "",
  });
  const onSignInPress = () => {
    Alert.alert("Sign Up");
  };
  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="flex-1 bg-white">
        <View className="realtive w-full h-[200px]">
          <Image source={images.signUpCar} className="w-full h-[200px] z-0" />
          <Text className="text-center text-2xl font-semibold font-JakartaSemiBold absolute bottom-5 left-5 right-5">
            Welcom Back 👋
          </Text>
        </View>
        <View className="p-5">
          
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-2"
          />
          {/* oauth */}
          <OAuth />

          <Link href={"/sign-up"} className="mt-4 text-center text-general-200">
            <Text>Don't have an account? </Text>
            <Text className="text-primary-500 underline"> Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;


