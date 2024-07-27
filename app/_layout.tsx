import { Stack, useRouter } from "expo-router";
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
      headerTitle: "Sign Up",
    },
  },
  {
    name: "auth/sign-in",
    options: {
      headerTitle: "Sign In",
    },
  },
  {
    name: "home",
    options: {
      headerTitle: "Home",
    },
  },
];

function Layout() {
  const { authState, onLogout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authState?.authenticated) {
      router.replace("/");
    }
  }, [authState?.authenticated]);

  return (
    <Stack>
      {Routes.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          options={route.options}
        />
      ))}
    </Stack>
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
