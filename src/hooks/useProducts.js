import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

// Get all products
export const useAllProductData = () => {
  const axiosPublic = useAxiosPublic();

  return useQuery({
    queryKey: ["phones"],
    queryFn: async () => {
      const data = await axiosPublic.get("/phones").then((res) => res.data);
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
      const data = await axiosPublic
        .get(`/phones/${productId}`)
        .then((res) => res.data);
      return data;
    },
    enabled: !!productId,
  });
};

// Post a single review
export const usePostSingleProductData = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const { refetch } = useAllProductData();

  return useMutation({
    mutationFn: (phoneData) =>
      axiosPublic.post("/phones", phoneData).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["phones"]);
      refetch();
    },
  });
};
