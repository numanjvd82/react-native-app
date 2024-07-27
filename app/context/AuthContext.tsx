import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";
import Toast from "react-native-root-toast";
import { axiosClient } from "../config/axios";
import { useLogin } from "../hooks/data/useLogin";

const TOKEN_KEY = "token";

type AuthState = {
  token: string | undefined;
  authenticated: boolean;
};

type AuthProps = {
  authState?: AuthState;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => void;
};

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { mutateAsync, isLoading } = useLogin();
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    token: undefined,
    authenticated: false,
  });

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      if (token) {
        setAuthState({ token, authenticated: true });
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
      }
    };

    checkToken();
  }, []);

  const loginUser = async (email: string, password: string) => {
    if (isLoading) console.log("Loading...");
    try {
      const data = await mutateAsync({ email, password });
      if (!data?.accessToken) {
        Toast.show("Invalid Email or Password", {
          position: Toast.positions.BOTTOM,
          duration: Toast.durations.LONG,
        });
        return;
      }

      setAuthState({ token: data.accessToken, authenticated: true });
      axiosClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.accessToken}`;

      await SecureStore.setItemAsync(TOKEN_KEY, data.accessToken);
      router.replace("/home");
    } catch (error: any) {
      Toast.show(error.message, {
        position: Toast.positions.BOTTOM,
        duration: Toast.durations.LONG,
      });
    }
  };

  const logoutUser = async () => {
    setAuthState({ token: undefined, authenticated: false });
    axiosClient.defaults.headers.common["Authorization"] = "";
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  };

  const value = {
    authState,
    onLogin: loginUser,
    onLogout: logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
