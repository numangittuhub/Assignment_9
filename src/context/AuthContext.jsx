import { createContext, useContext, useEffect, useState } from "react";
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    sendPasswordResetEmail,
    onAuthStateChanged,
  } from "firebase/auth";
  import { auth } from "../firebase.config";
  import { toast } from "react-toastify";

  const AuthContext = createContext();

  export const useAuth = () => useContext(AuthContext);

  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign Up with Email and Password
    const signup = async (email, password, displayName, photoURL) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName, photoURL });
        setUser(userCredential.user);
        toast.success("Signup successful!");
        return userCredential.user;
      } catch (error) {
        toast.error(error.message);
        throw error;
      }
    };

    // Login with Email and Password
    const login = async (email, password) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
        toast.success("Login successful!");
        return userCredential.user;
      } catch (error) {
        toast.error(error.message);
        throw error;
      }
    };

    // Google Sign-In
    const googleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const userCredential = await signInWithPopup(auth, provider);
        setUser(userCredential.user);
        toast.success("Signed in with Google!");
        return userCredential.user;
      } catch (error) {
        toast.error(error.message);
        throw error;
      }
    };

    // Logout
    const logout = async () => {
      try {
        await signOut(auth);
        setUser(null);
        toast.success("Logged out successfully!");
      } catch (error) {
        toast.error(error.message);
      }
    };

    // Forgot Password
    const resetPassword = async (email) => {
      try {
        await sendPasswordResetEmail(auth, email);
        toast.success("Password reset email sent!");
      } catch (error) {
        toast.error(error.message);
        throw error;
      }
    };

    // Update Profile
    const updateUserProfile = async (displayName, photoURL) => {
      try {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        setUser({ ...auth.currentUser });
        toast.success("Profile updated successfully!");
      } catch (error) {
        toast.error(error.message);
        throw error;
      }
    };

    // Monitor auth state
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);

    const value = {
      user,
      loading,
      signup,
      login,
      googleSignIn,
      logout,
      resetPassword,
      updateUserProfile,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
  };