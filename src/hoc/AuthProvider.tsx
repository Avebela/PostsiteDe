import { createContext, useState } from "react";

export const AuthContext = createContext(null);
type Props = {
  children: React.ReactNode;
};
export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState("");

  const signin = (newUser: string, cb: () => {}) => {
    setUser(newUser);
    cb();
  };
  const signout = (cb: () => {}) => {
    setUser("");
    cb();
  };

  const value = { user, signin, signout };

  return null;
  // <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
