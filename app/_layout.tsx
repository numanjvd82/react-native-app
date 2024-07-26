import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="auth/sign-up"
        options={{
          headerTitle: "Sign Up",
        }}
      />

      <Stack.Screen
        name="auth/sign-in"
        options={{
          headerTitle: "Sign In",
        }}
      />
    </Stack>
  );
}
