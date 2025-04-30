import React from "react";
import { auth } from "@/utils/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loadingInitialState, setLoadingInitialState] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          // User is signed in
          setUser(authUser);
        } else {
          // User is signed out
          setUser(null);
        }
        setLoadingInitialState(false);
      });
  
      // Unsubscribe from the listener when the component unmounts
      return unsubscribe;
    }, [auth]);
  
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {loadingInitialState ? <LoadingScreen /> : children}
      </AuthContext.Provider>
    );
  };