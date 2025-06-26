// hooks/useReviews.js
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

// Get all testimonials
export const useAllTestimonialData = () => {
  const axiosPublic = useAxiosPublic();

  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });
};
