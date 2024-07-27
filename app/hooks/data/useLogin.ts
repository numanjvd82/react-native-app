import Toast from "react-native-root-toast";
import { useMutation } from "react-query";
import { axiosClient } from "../../config/axios";

type LoginUser = {
  email: string;
  password: string;
};

const loginUser = async ({ email, password }: LoginUser) => {
  try {
    const response = await axiosClient.post("/auth/login", {
      email,
      password,
    });

    if (!response.data || response.status !== 200) {
      Toast.show("Invalid Email or Password", {
        position: Toast.positions.BOTTOM,
        duration: Toast.durations.LONG,
      });
    }

    return response.data;
  } catch (error: any) {
    Toast.show(error.message, {
      position: Toast.positions.CENTER,
      duration: Toast.durations.LONG,
    });
  }
};

export const useLogin = () => {
  return useMutation(loginUser);
};
