import { CustomButton } from "@/components/CustomButton";
import { images } from "@/constants";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";

const Index = () =>{
  function handleGetStarted(){
    router.push("/my-trips");
  }
  return (
      <View
      className="relative flex flex-col h-full"
      >
        <Image source={images.welcomeImg} className="w-full h-[70%] object-cover object-center"/>
        <View className="flex-1 bg-yellow-300 -mt-24 rounded-t-3xl w-full pt-12 flex items-center justify-start">
          <Text className="text-3xl font-bold">AI Travel Planner</Text>
          <Text className="text-base">Plan your next travel with ai.</Text>
          <CustomButton title={"Let's Get Started"} onPress={handleGetStarted}/>
        </View>
      </View>
  );
}

export default Index