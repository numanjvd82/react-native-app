import { Link } from "expo-router";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

const recentlyPlayedList = [
  {
    id: 1,
    title: "Starboy",
    image: require("../../assets/images/album-1.png"),
    singers: ["The Weeknd", "Daft Punk", "Lana Del Rey", "Future"],
    type: "Playlist",
  },
  {
    id: 2,
    title: "After Hours",
    image: require("../../assets/images/album-2.jpg"),
    singers: ["Lana Del Rey", "The Weeknd", "Ariana Grande"],
    type: "Playlist",
  },
  {
    id: 3,
    title: "Beauty Behind the Madness",
    image: require("../../assets/images/album-3.jpg"),
    type: "Singer",
  },
  {
    id: 4,
    title: "Kiss Land",
    image: require("../../assets/images/album-4.jpg"),
    type: "Singer",
  },
  {
    id: 5,
    title: "My Dear Melancholy",
    image: require("../../assets/images/album-5.jpg"),
    singers: ["The Weeknd", "Lana Del Rey", "Ariana Grande, Future"],
    type: "Playlist",
  },
  {
    id: 6,
    title: "Trilogy",
    image: require("../../assets/images/album-6.jpg"),
    singers: [
      "The Weeknd",
      "Lana Del Rey",
      "Ariana Grande, Future",
      "Kendrick Lamar",
    ],
    type: "Playlist",
  },
];

type RecentlyPlayedProps = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  singers?: string[];
  type: string;
};

const width = Dimensions.get("window").width;

function RecentlyPlayed({
  id,
  image,
  title,
  type,
  singers,
}: RecentlyPlayedProps) {
  const Singer = () => {
    return (
      <Link href={`/home/${id}`}>
        <View className="w-52">
          <Image
            source={image}
            className="w-[200px] h-[200px] p-2 rounded-full"
          />
          <Text className="text-white text-center text-md">{title}</Text>
        </View>
      </Link>
    );
  };

  const Playlist = () => {
    return (
      <Link href={`/home/${id}`}>
        <View className="w-52 mr-2">
          <ImageBackground
            source={image}
            borderRadius={10}
            className="w-[200px] h-[200px] flex justify-end items-start p-2"
          >
            <Text className="text-white text-lg font-bold">{title}</Text>
          </ImageBackground>
          {singers && (
            <Text className="text-white text-sm">{singers.join(", ")}</Text>
          )}
        </View>
      </Link>
    );
  };

  return (
    <View
      style={{
        width: width * 0.55,
      }}
    >
      {type === "Playlist" ? <Playlist /> : <Singer />}
    </View>
  );
}

export default function RecentlyPlayedList({ title }: { title: string }) {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text className="text-white text-2xl font-bold my-4 ml-4">{title}</Text>

        <FlatList
          data={recentlyPlayedList}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <RecentlyPlayed
              id={item.id}
              image={item.image}
              title={item.title}
              type={item.type}
              singers={item.singers}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
}
