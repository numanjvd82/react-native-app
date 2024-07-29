import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import { detailedData } from "../config/constants";
import { SongImageRef, SongListHeader } from "./SongsListHeader";

type SongProps = (typeof detailedData)[number]["songs"][number];
type SongListProps = (typeof detailedData)[number];

function Song({ id, image, name, singers }: SongProps) {
  return (
    <View className="p-2 bg-black flex-row justify-between items-center">
      <View className="flex-row items-center">
        <Image source={image} className="w-14 h-14" />
        <View className="ml-2">
          <Text className="text-white font-bold text-md">
            {name.length > 15 ? name.substring(0, 15) + "..." : name}
          </Text>
          <Text className="text-gray-300 text-sm">
            {singers.length > 2
              ? singers.slice(0, 2).join(", ") + "More"
              : singers.join(", ")}
          </Text>
        </View>
      </View>
      <View className="mr-2">
        <FontAwesome6 name="ellipsis" size={24} color="#d1d5db" />
      </View>
    </View>
  );
}

export default function SongsList({ list }: { list: SongListProps }) {
  const [previousOffsetY, setPreviousOffsetY] = useState(0);
  const ref = React.useRef<SongImageRef>(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { y } = e.nativeEvent.contentOffset;
    if (y > previousOffsetY) {
      ref.current?.decreaseOpacityandScale();
    } else if (y < previousOffsetY) {
      ref.current?.increaseOpacityandScale();
    }

    setPreviousOffsetY(y);
  };

  return (
    <FlatList
      data={list.songs}
      renderItem={({ item }) => <Song {...item} />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <SongListHeader {...list} ref={ref} />}
      ListHeaderComponentStyle={{ marginBottom: 20 }}
      onScroll={handleScroll}
    />
  );
}
