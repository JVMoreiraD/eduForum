import { Navigate, Route, RouteMatch, Routes } from "react-router-dom"
import SignIn from "../pages/Auth/SignIn"

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/auth/singIn" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/auth/singIn" />} />
        </Routes>
    )
}