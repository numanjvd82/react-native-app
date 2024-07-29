import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Animated, Image, Text, View } from "react-native";
import { detailedData } from "../config/constants";
import { secondsToHms } from "../config/utils";
import RoundedIconButton from "./RoundedIconButton";

type SongListHeaderProps = Omit<(typeof detailedData)[number], "songs"> & {
  scrollY: Animated.Value;
};

export const SongListHeader = ({
  durationInSec,
  image,
  name,
  singers,
  scrollY,
}: SongListHeaderProps) => {
  const scale = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0.7],
    extrapolate: "clamp",
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0.2],
    extrapolate: "clamp",
  });

  return (
    <>
      <View className="h-80 justify-center items-center">
        <Animated.Image
          borderRadius={2}
          source={image}
          style={{
            width: 288,
            height: 288,
            transform: [{ scale }],
            opacity,
          }}
        />
      </View>
      <View className="mt-4 pl-2">
        <Text className="text-white text-lg font-bold">{name}</Text>
        <Text className="text-white font-bold text-sm">
          {singers.length > 3
            ? singers.slice(0, 3).join(", ") + " and more"
            : singers.join(", ")}
        </Text>
        <View className="flex-row my-1 items-center">
          <FontAwesome6 name="spotify" size={24} color="white" />
          <Text className="text-white text-md ml-1">
            <Text>Made For</Text>
            <Text className="font-bold"> You</Text>
          </Text>
        </View>
        <Text className="text-white font-bold">
          {secondsToHms(durationInSec)}
        </Text>
      </View>
      <View className="mt-1 pl-2 flex-row justify-between">
        <View className="flex-row items-center gap-5">
          <View className="w-10 border-4 justify-center items-center rounded-lg border-gray-300">
            <Image borderRadius={4} source={image} className="w-8 h-12" />
          </View>

          <FontAwesome6 name="circle-plus" size={24} color="#d1d5db" />
          <FontAwesome6 name="circle-arrow-down" size={24} color="#d1d5db" />
          <FontAwesome6 name="ellipsis" size={24} color="#d1d5db" />
        </View>
        <View className="pr-2 flex-row justify-center items-center">
          <FontAwesome6 name="shuffle" size={24} color="#d1d5db" />
          <RoundedIconButton className="ml-4" icon="play" />
        </View>
      </View>
    </>
  );
};
