import { createContext } from "react";

export const AuthContext = createContext();

export const actionTypes = {
  login: "LOGIN",
  logout: "LOGOUT",
  loading: "LOADING",
  googleLoading: "GOOGLE_LOADING",
  setReviews: "SET_REVIEWS",
  addReview: "ADD_REVIEW",
};
