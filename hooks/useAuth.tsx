import {
    createContext,
    useContext,
    useState,
    type PropsWithChildren,
} from "react";

interface AuthContextType {
    user?: string | null;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => null,
    logout: () => null,
});

export function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<string | null>(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                login: () => setUser("hi"),
                logout: () => setUser(null),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}
