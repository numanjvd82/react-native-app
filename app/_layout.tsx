import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootSiblingParent>
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
      </RootSiblingParent>
    </QueryClientProvider>
  );
}
