// hooks/useReviews.js
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

// Get all reviews
export const useAllReviewData = () => {
  const axiosPublic = useAxiosPublic();

  return useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });
};

// Get a single review
export const useSingleReviewData = (reviewId) => {
  const axiosPublic = useAxiosPublic();
  const { refetch } = useAllReviewData();

  return useQuery({
    queryKey: ["review", reviewId],
    queryFn: async () => {
      const { data } = await axiosPublic
        .get(`/reviews/${reviewId}`)
        .then((res) => res.data);
      return data;
    },
    onSuccess: refetch(),
    enabled: !!reviewId,
  });
};

// Post a single review
export const usePostSingleReviewData = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const { refetch } = useAllReviewData();

  return useMutation({
    mutationFn: (reviewData) =>
      axiosPublic.post("/reviews", reviewData).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
      refetch();
    },
  });
};

// Update a single review
export const useUpdateSingleReviewData = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const { refetch } = useAllReviewData();

  return useMutation({
    mutationFn: (updateReviewData) =>
      axiosPublic.patch("/reviews", updateReviewData).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
      refetch();
    },
  });
};

// Delete a single review
export const useDeleteSingleReviewData = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const { refetch } = useAllReviewData();

  return useMutation({
    mutationFn: (reviewId) =>
      axiosPublic.delete(`/reviews/${reviewId}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
      refetch();
    },
  });
};
