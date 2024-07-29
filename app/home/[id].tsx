import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import SongsList from "../components/SongsList";
import { detailedData } from "../config/constants";

export default function Details() {
  const { id } = useLocalSearchParams();

  const data = detailedData.find((item) => item.id === Number(id));

  if (!data) {
    return null;
  }

  return (
    <LinearGradient className="h-full" colors={["#439158", "#444d46"]}>
      <SongsList list={data} />
    </LinearGradient>
  );
}
