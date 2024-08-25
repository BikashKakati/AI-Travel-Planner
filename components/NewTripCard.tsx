import { images } from "@/constants"
import { Alert, Image, Text, TouchableOpacity, View } from "react-native"
import { CustomButton } from "./CustomButton"
import { Href, router } from "expo-router"

const NewTripCard = () =>{
    function handleStartTrip(){
        router.push("/create-trip");
    }
    return(
        <View className="mt-10 flex items-center">
            <Image source={images.noTripImg} className="w-[300px] h-[300px] object-contain object-center rounded-full"/>
            <Text className="text-2xl font-bold mt-3">No trip planned yet!</Text>
            <Text className="text-sm text-gray-500 w-10/12 text-center mt-2">Looks like it's time to plan a new travel experience! Get started below</Text>
            <CustomButton title={"Let's Start a new trip"} onPress={handleStartTrip} />
        </View>
    )
}

export default NewTripCard