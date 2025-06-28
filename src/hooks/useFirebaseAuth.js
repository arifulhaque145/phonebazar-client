import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth, { googleProvider } from "../firebase/firebase.init";
import useAxiosPublic from "./useAxiosPublic";

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerUser = (name, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    updateProfile(auth.currentUser, {
      displayName: name,
    })
  );
};

export const googleLogin = async () => {
  return signInWithPopup(auth, googleProvider);
};

export const logoutUser = async () => {
  await signOut(auth);
};

// Get all users
export const useAllUserData = () => {
  const axiosPublic = useAxiosPublic();

  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
};

// Get a single user
export const useSingleUserData = (userId) => {
  const axiosPublic = useAxiosPublic();

  return useQuery({
    queryKey: ["users", userId],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/users/${userId}`);
      return data;
    },
    enabled: !!userId,
  });
};

// Post a single review
export const usePostSingleUserData = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const { refetch } = useAllUserData();

  return useMutation({
    mutationFn: (userData) =>
      axiosPublic.post("/users", userData).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      refetch();
    },
  });
};
