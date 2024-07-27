import { ScrollView, View } from "react-native";
import AlbumList from "../components/AlbumList";
import RecentlyPlayedList from "../components/RecentlyPlayedList";

export default function Home() {
  return (
    <ScrollView className="bg-black">
      <View>
        <AlbumList />
        <RecentlyPlayedList title="Recently Played" />
        <RecentlyPlayedList title="Jump into the Mix" />

        <RecentlyPlayedList title="Made For You" />
      </View>
    </ScrollView>
  );
}
