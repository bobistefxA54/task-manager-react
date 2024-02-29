import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  username: string | null;
  saveToken: (token: string) => void;
  saveUsername: (username: string) => void;
  removeToken: () => void;
  removeUsername: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken || null;
  });

  const [username, setUsername] = useState<string | null>(() => {
    const storedUsername = localStorage.getItem("username");
    return storedUsername || null;
  });

  const saveToken = (token: string) => {
    // Save token to local storage or secure storage
    localStorage.setItem("token", token);
    setToken(token);
  };

  const removeToken = () => {
    // Remove token from local storage or secure storage
    localStorage.removeItem("token");
    setToken(null);
  };

  const saveUsername = (username: string) => {
    localStorage.setItem("username", username);
    setUsername(username);
  };

  const removeUsername = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        username,
        saveToken,
        saveUsername,
        removeToken,
        removeUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
