import React, { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate fetching user data (replace with real API call)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Example: Replace with your actual authentication logic
        const userData = await fakeAuthCheck();
        setUser(userData);
        setIsLoggedIn(!!userData);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
        setIsLoggedIn(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuthState = () => {
  return useContext(AuthContext);
};
