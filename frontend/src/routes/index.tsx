import { useAuth } from "../contexts/useAuthContext";
import { AuthRoutes } from "./auth.routes";

export function Router() {
    const { isAuthenticated } = useAuth();

    return (
        isAuthenticated ? <AuthRoutes /> : <AuthRoutes />
        // <AuthRoutes />
    )
}