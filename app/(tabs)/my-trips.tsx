import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import NewTripCard from "@/components/NewTripCard";

const MyTrips = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center mt-5 px-4">
        <Text className="text-3xl font-bold ">My Trips</Text>
        <TouchableOpacity>
          <AntDesign name="pluscircle" size={32} color="black" />
        </TouchableOpacity>
      </View>

      {/* new trip card */}
      <NewTripCard />
    </SafeAreaView>
  );
};

export default MyTrips;
