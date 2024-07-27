import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-root-toast";
import { useRegister } from "../hooks/data/useRegister";

function SignUp() {
  const router = useRouter();
  const { mutateAsync } = useRegister();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      Toast.show("Email and password are required", {
        position: Toast.positions.BOTTOM,
        duration: Toast.durations.SHORT,
      });
      return;
    }

    try {
      const registered = await mutateAsync({ email, password });
      if (registered) router.push("/auth/sign-in");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="flex-1 p-4 justify-center items-center bg-gray-900">
      <View className="bg-black w-full bg-opacity-50 p-4 rounded-lg">
        <Text className="text-white text-2xl font-bold text-center">
          Sign Up
        </Text>

        <Text className="text-gray-600 text-center mt-2">
          Create an account to continue
        </Text>

        <View className=" mt-4">
          <Text className="text-white">Email</Text>
          <TextInput
            style={{ color: "white" }}
            className="border-b border-gray-400"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />

          <Text className="text-white mt-2">Password</Text>

          <TextInput
            className="border-b border-gray-400"
            style={{ color: "white" }}
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View className="mt-4">
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-green-500 p-2 rounded-lg"
          >
            <Text className="text-white text-center">Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-gray-600 text-center mt-4 ">
          Already have an account?
          <Link href="auth/sign-in">
            <Text className="text-green-500 pl-1">Sign In</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}

export default SignUp;
