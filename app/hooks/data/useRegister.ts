import Toast from "react-native-root-toast";
import { useMutation } from "react-query";
import { axiosClient } from "../../config/axios";

type RegisterUser = {
  email: string;
  password: string;
};

const registerUser = async ({ email, password }: RegisterUser) => {
  try {
    const response = await axiosClient.post("/auth/register", {
      email,
      password,
    });

    if (response.status !== 200) {
      Toast.show("Failed to register", {
        position: Toast.positions.BOTTOM,
        duration: Toast.durations.LONG,
      });
    }

    return true;
  } catch (error: any) {
    Toast.show(error.message, {
      position: Toast.positions.CENTER,
      duration: Toast.durations.LONG,
    });

    return false;
  }
};

export const useRegister = () => {
  return useMutation(registerUser);
};
