import { User } from "@/constants/Types";
import { HttpClient } from "@/logic/HttpClient";
import { router } from "expo-router";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

interface AuthContextType {
  user?: User | null;
  login: (email: string, password: string) => void;
  signup: (username: string, email: string, password: string) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => null,
  signup: () => null,
  logout: () => null,
  loading: false,
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: async (email, password) => {
          setLoading(true);
          try {
            const user = await HttpClient.Post("users/login", {
              email,
              password,
            });
            setUser(user.profile);
          } catch (err) {
            console.error("API: Failed to login", err);
          } finally {
            setLoading(false);
            router.replace("/(home)/feed");
          }
        },
        signup: async (username, email, password) => {
          setLoading(true);
          try {
            const user = await HttpClient.Post(
              "users/signup?username=" + username,
              { email, password }
            );
            setUser(user);
          } catch (err) {
            console.error("API: Failed to signup", err);
          } finally {
            setLoading(false);
            router.replace("/(home)/feed");
          }
        },
        logout: () => setUser(null),
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
