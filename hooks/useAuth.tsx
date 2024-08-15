import { API_BASE_URL, User } from "@/constants/Types";
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
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => null,
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
                        const res = await fetch(API_BASE_URL + "/users/login", {
                            method: "POST",
                            body: JSON.stringify({ email, password }),
                            headers: {
                                Accept: "application/json, text/plain",
                                "Content-Type":
                                    "application/json;charset=UTF-8",
                            },
                        });
                        const data = await res.json();
                        setUser(data.profile);
                    } catch (err) {
                        console.error("API: Failed to login", err);
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
