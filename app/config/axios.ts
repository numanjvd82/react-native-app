import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://192.168.18.17:3000",
});
