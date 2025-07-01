import axios from "axios";

const baseURL = import.meta.env.VITE_URL;
if (!baseURL) {
  throw new Error("VITE_URL environment variable is not defined");
}
const axiosPublic = axios.create({
  baseURL,
});

export default function useAxiosPublic() {
  return axiosPublic;
}
