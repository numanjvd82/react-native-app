import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider, useAuth } from "./context/AuthContext";

const queryClient = new QueryClient();

const Routes = [
  {
    name: "index",
    options: {
      headerShown: false,
    },
  },
  {
    name: "auth/sign-up",
    options: {
      headerShown: false,
    },
  },
  {
    name: "auth/sign-in",
    options: {
      headerShown: false,
    },
  },
  {
    name: "home",
    options: {
      headerTitle: "",
    },
  },
];

function Layout() {
  const { authState } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authState?.authenticated) {
      router.replace("/");
    } else {
      router.replace("/home");
    }
  }, [authState?.authenticated]);

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {Routes.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            options={route.options}
          />
        ))}
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootSiblingParent>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </RootSiblingParent>
    </QueryClientProvider>
  );
}
