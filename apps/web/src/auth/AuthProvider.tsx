
import {
    createContext,
    FC,
    ReactNode,
    useContext,
    useMemo,
  } from "react";
  import useSelector from "../hooks/useSelector";
  import { User } from "../models/user.model";
  import { authSelector, userSelector } from "../state/user/user.selector";
  
  interface AuthContext {
    isAuthenticated: boolean;
    user: User
  }
  
  const AuthConsumer = createContext<AuthContext | null>(null);
  
  const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useSelector(authSelector);
    const user = useSelector(userSelector);
    
  
    const value = useMemo(() => ({isAuthenticated, user}), [isAuthenticated, user])
    return (
      <AuthConsumer.Provider
        value={value}
      >
        {children}
      </AuthConsumer.Provider>
    );
  };
  
  const useAuth = () => {
    const value = useContext(AuthConsumer);
  
    if (!value) {
      throw new Error("AuthProvider not initialized");
    }
    return value;
  };
  
  export { AuthProvider, useAuth };
  