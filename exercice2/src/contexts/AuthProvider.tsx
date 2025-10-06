import { createContext, useContext, useState } from "react";
import { apiLogin } from "../data/api";

type AuthContextType = {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }) {
    const [token, setToken] = useState<string|null>(null);

    const login = async (email: string, password: string) => {
        apiLogin(email, password)
            .then((data) =>  {
                setToken(data.token)
                console.log(data.token);
            })
            .catch((error) => console.error("Failed to login:", error));
    }
    const logout = () => setToken(null);

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};