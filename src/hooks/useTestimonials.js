import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

// Get all testimonials
export const useAllTestimonialData = () => {
  const axiosPublic = useAxiosPublic();

  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axiosPublic
        .get("/testimonials")
        .then((response) => response.data);
      return res;
    },
  });
};

// Update a single review
export const useUpdateSingleReviewData = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updateReviewData) =>
      axiosPublic
        .patch("/testimonials", updateReviewData)
        .then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
    },
  });
};

// Post a single review
export const usePostSingleReviewData = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewData) =>
      axiosPublic.post("/testimonials", reviewData).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
    },
  });
};

// Delete a single review
export const useDeleteSingleReviewData = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId) =>
      axiosPublic.delete(`/testimonials/${reviewId}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
    },
  });
};
