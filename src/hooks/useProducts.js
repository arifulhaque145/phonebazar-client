import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

// Get all products
export const useAllProductData = () => {
  const axiosPublic = useAxiosPublic();

  return useQuery({
    queryKey: ["phones"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/phones").then((res) => res.data);
      return data;
    },
  });
};

// Get a single product
export const useSingleProductData = (productId) => {
  const axiosPublic = useAxiosPublic();

  return useQuery({
    queryKey: ["phones", productId],
    queryFn: async () => {
      const { data } = await axiosPublic
        .get(`/phones/${productId}`)
        .then((res) => res.data);
      return data;
    },
    enabled: !!productId,
  });
};
