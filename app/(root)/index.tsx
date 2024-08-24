import { images } from "@/constants";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Index = () =>{
  function handleGetStarted(){
    router.push("/(root)/home");
  }
  return (
      <View
      className="relative flex flex-col h-full"
      >
        <Image source={images.welcomeImg} className="w-full h-[70%] object-cover object-center"/>
        <View className="flex-1 bg-yellow-300 -mt-24 rounded-t-3xl w-full pt-12 flex items-center justify-start">
          <Text className="text-3xl font-bold">AI Travel Planner</Text>
          <Text className="text-base">Plan your next travel with ai.</Text>
          <TouchableOpacity onPress={handleGetStarted} className="py-5 bg-red-500  w-11/12 rounded-full flex items-center mt-6">
            <Text className="text-white text-base font-semibold">Let's Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default Index