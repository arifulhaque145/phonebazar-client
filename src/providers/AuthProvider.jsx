import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useReducer } from "react";
import auth from "../firebase/firebase.init";
import { actionTypes, AuthContext } from "./ActionTypes";

const initialState = {
  user: null,
};

function actionReducer(state, action) {
  switch (action.type) {
    case actionTypes.login:
      return { ...state, user: action.payload };
    case actionTypes.logout:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(actionReducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: actionTypes.login, payload: user?.email });
      } else {
        dispatch({ type: actionTypes.logout });
      }
    });

    return () => unsubscribe();
  }, []);

  const setUser = (user) => dispatch({ type: actionTypes.login, payload: user });

  const actions = { setUser };

  return (
    <AuthContext.Provider value={{ state, actions }}>
      {children}
    </AuthContext.Provider>
  );
}
