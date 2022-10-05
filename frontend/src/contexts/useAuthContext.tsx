import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IAuthProvider {
    children: ReactNode
}

interface ISignIn {
    email: string;
    password: string;
}
interface ISetLogged {
    token: string
}

interface IAuthContextData {
    isAuthenticated: boolean;
    singIn({ email, password }: ISignIn): Promise<string>
    signOut(): void
    setLogged({ token }: ISetLogged): void
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

const STORAGE_TOKEN = "@JWT:token";



export function AuthProvider({ children }: IAuthProvider) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        async function loadStorageData() {
            const storageToken = localStorage.getItem(STORAGE_TOKEN)

            if (storageToken) {
                api.defaults.headers.common.Authorization = `Bearer ${storageToken}`

                setIsAuthenticated(true)
            }
        }
    }, [])

    async function singIn({ email, password }: ISignIn) {
        try {
            const response = await api.post("/auth/singIn", {
                email,
                password
            })

            setLogged({
                token: response.data.accessToken
            })

            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`

            return response.data.message
        } catch (error: any) {
            return error.message.data.errors
        }
    }
    function setLogged({ token }: ISetLogged) {
        localStorage.setItem(STORAGE_TOKEN, token)
        setIsAuthenticated(true)
    }
    function signOut() {
        localStorage.removeItem(STORAGE_TOKEN)
        setIsAuthenticated(false)
    }
    return (
        < AuthContext.Provider value={{ isAuthenticated, singIn, signOut, setLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}