import { Link } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-900">
      <View className="rounded-lg overflow-hidden shadow-lg">
        <ImageBackground
          source={require("../assets/images/home-bg.jpg")}
          className="flex-1 justify-end p-8"
          imageStyle={{ borderRadius: 15 }}
        >
          <View className="bg-black bg-opacity-50 p-4 rounded-lg">
            <Text className="text-white text-2xl font-bold mb-4">
              Enjoy your favorite music
            </Text>
            <Link href="/auth/sign-up" asChild>
              <TouchableOpacity className="bg-green-500 rounded-full py-3 mb-4 items-center">
                <Text className="text-white font-bold">Get started</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/auth/sign-in" asChild>
              <TouchableOpacity className="border-2 border-green-500 rounded-full py-3 items-center">
                <Text className="text-green-500 font-bold">
                  Continue with Email
                </Text>
              </TouchableOpacity>
            </Link>
            <Text className="text-gray-300 text-xs text-center mt-4">
              By continuing, you agree to the Terms of Service & Privacy Policy
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Index;
