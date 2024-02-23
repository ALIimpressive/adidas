import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../helpers/function";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return { ...state, user: action.paylod };
    default:
      return;
  }
};
const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const googleProvider = new GoogleAuthProvider();
  //
  function chekHell() {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "CHECK_USER",
        paylod: user,
      });
    });
  }
  //
  //
  useEffect(() => {
    chekHell();
  }, []);
  //
  //
  async function signWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      alert(error);
    }
  }
  //
  //
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }

  async function logOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    register,
    signWithGoogle,
    user: state.user,
    login,
    logOut,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
