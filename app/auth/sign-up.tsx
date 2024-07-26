import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-center items-center bg-gray-900">
      <View className="bg-white p-4 rounded-lg shadow-lg">
        <Text className="text-2xl font-bold text-center">Sign Up</Text>

        <Text className="text-gray-600 text-center mt-2">
          Create an account to continue
        </Text>

        <View className="mt-4">
          <Text>Email</Text>
          <TextInput
            className="border-b border-gray-400"
            placeholder="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />

          <Text className="mt-2">Password</Text>

          <TextInput
            className="border-b border-gray-400"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View className="mt-4">
          <TouchableOpacity
            onPress={() => {
              console.log(`Email: ${email}, Password: ${password}`);
            }}
            className="bg-green-500 p-2 rounded-lg"
          >
            <Text className="text-white text-center">Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-center mt-4 ">
          Already have an account?
          <Link href="auth/sign-in" className="text-green-500 pl-1">
            Sign In
          </Link>
        </Text>
      </View>
    </View>
  );
}

export default SignUp;
