import { FontAwesome6 } from "@expo/vector-icons";
import { View, ViewProps } from "react-native";

type RoundedIconButtonProps = ViewProps & {
  tailwindBgColor?: string;
  icon: string;
  iconColor?: string;
  iconSize?: number;
};

export default function RoundedIconButton({
  icon,
  iconColor = "black",
  tailwindBgColor = "bg-primary",
  iconSize = 24,
  ...rest
}: RoundedIconButtonProps) {
  return (
    <View
      {...rest}
      className={`${tailwindBgColor} w-12 h-12 rounded-full justify-center items-center`}
    >
      <FontAwesome6 name={icon} size={iconSize} color={iconColor} />
    </View>
  );
}
