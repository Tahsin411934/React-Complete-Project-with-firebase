import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //PROVIDER
  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();


  //createUserWithEmailAndPassword
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  //updateProfile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };


  //signInWithEmailAndPassword
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  //googleLogin
  const googleLogin = () => { 
    return signInWithPopup(auth, googleProvider);
  };


  //githubLogin
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };

//logOut
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const values = {
    loading,
    setUser,
    user,
    setLoading,
    createUser,
    signinUser,
    googleLogin,
    githubLogin,
    logOut,
    updateUserProfile,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};


AuthProvider.propTypes = {
  children: PropTypes.children
};
export default AuthProvider;
