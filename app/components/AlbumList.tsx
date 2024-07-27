import { Image, ImageSourcePropType, Text, View } from "react-native";

type AlbumProps = {
  name: string;
  image: ImageSourcePropType;
};

const albums = [
  {
    name: "Starboy",
    image: require("../../assets/images/album-1.png"),
  },
  {
    name: "After Hours",
    image: require("../../assets/images/album-2.jpg"),
  },
  {
    name: "Beauty Behind the Madness",
    image: require("../../assets/images/album-3.jpg"),
  },
  {
    name: "Kiss Land",
    image: require("../../assets/images/album-4.jpg"),
  },
  {
    name: "My Dear Melancholy",
    image: require("../../assets/images/album-5.jpg"),
  },
  {
    name: "Trilogy",
    image: require("../../assets/images/album-6.jpg"),
  },
];

function Album({ name, image }: AlbumProps) {
  return (
    <View className="bg-white/10 w-48 h-20 flex-row items-center m-1 rounded-lg">
      <View className="flex-none overflow-hidden rounded-lg">
        <Image className="w-20 h-20" source={image} />
      </View>
      <View className="flex-1 pl-3 pr-1">
        <Text className="text-white text-lg font-bold">
          {name.length > 20 ? name.substring(0, 20) + "..." : name}
        </Text>
      </View>
    </View>
  );
}

export default function AlbumList() {
  return (
    <View className="flex-row flex-wrap justify-center mt-2">
      {albums.map(({ image, name }, index) => (
        <Album key={index} name={name} image={image} />
      ))}
    </View>
  );
}
