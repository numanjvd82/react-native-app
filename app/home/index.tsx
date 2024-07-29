import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View } from "react-native";
import AlbumList from "../components/AlbumList";
import RecentlyPlayedList from "../components/RecentlyPlayedList";

export default function Home() {
  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
      <ScrollView>
        <View>
          <AlbumList />
          <RecentlyPlayedList title="Recently Played" />
          <RecentlyPlayedList title="Jump into the Mix" />
          <RecentlyPlayedList title="Made For You" />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
