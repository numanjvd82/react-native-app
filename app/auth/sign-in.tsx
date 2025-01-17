import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-root-toast";
import { useAuth } from "../context/AuthContext";

function SignIn() {
  const { onLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show("Email and Password are required", {
        position: Toast.positions.BOTTOM,
        duration: Toast.durations.LONG,
      });
      return;
    }
    try {
      await onLogin!(email, password);
    } catch (error) {
      Toast.show("Invalid Email or Password", {
        position: Toast.positions.BOTTOM,
        duration: Toast.durations.LONG,
      });
    }
  };

  return (
    <View className=" p-4 flex-1 justify-center items-center bg-gray-900">
      <View className="bg-black w-full p-4 bg-opacity-50 rounded-lg">
        <Text className="text-white text-2xl font-bold text-center">
          Sign In
        </Text>

        <Text className="text-gray-600 text-center mt-2">
          Sign in to continue
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
            onPress={handleLogin}
            className="bg-primary p-2 rounded-lg"
          >
            <Text className="text-white text-center">Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-gray-600 text-center mt-4 ">
          Don't have an account?
          <Link href="auth/sign-up">
            <Text className="text-primary pl-1">Create One</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}

export default SignIn;
