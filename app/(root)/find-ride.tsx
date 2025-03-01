import { View, Text } from "react-native";
import React from "react";
import { useLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setUserLocation,
    setDestinationLocation,
  } = useLocationStore();
  return (
    <RideLayout>
      <Text>You are here: {userAddress}</Text>
      <Text>You are going to: {destinationAddress}</Text>
    </RideLayout>
  );
};

export default FindRide;
