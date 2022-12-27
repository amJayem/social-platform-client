import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const socialSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const signUp = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("authProvider: ", currentUser);
    });
    return () => unsubscribe();
  }, []);

  const values = { user, loading, socialSignIn, signUp, signInWithEmail, logOut };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
