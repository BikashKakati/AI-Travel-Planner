import {
  View,
  Text,
  Image,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { CustomIcon } from "@/components/CustomIcon";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const CreateTrip = () => {
  const [searchPlaceQuery, setSearchPlaceQuery] = useState<string>("");

  function handleSetSearchPlaceQuery(
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setSearchPlaceQuery(e.nativeEvent.text);
  }

  function handleSelectPlace() {
    router.push("/select-days");
  }

  return (
    <SafeAreaView className="relative h-full w-full">
      <View className="relative w-11/12 py-3 mx-auto mt-3 rounded-full border border-zinc-400 flex flex-row items-center">
        <TextInput
          placeholder="Search a place from here.."
          className="pl-5 flex-1"
          value={searchPlaceQuery}
          onChange={handleSetSearchPlaceQuery}
        />
        <CustomIcon
          name="search"
          size={24}
          className="px-4"
          color={"grey"}
          onPress={handleSelectPlace}
        />
        {/* fontawesom icon not accept className so if make component then it accept */}
      </View>
      <Link href={"/select-days"}>Select Date</Link>

      {/* search field */}
      {/* <Image
        source={images.earthImg}
        className="h-[80%] w-[170%] -mb-32 object-cover object-center"
      /> */}
      {/* <Link href={"/select-days"}>Select Days</Link> */}
    </SafeAreaView>
  );
};

export default CreateTrip;
