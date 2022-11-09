import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from '../pages/Register'
import { TodosScreen } from "../pages/TodosScreen"
import { DashboardRoutes } from "./DashboardRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<TodosScreen />} />

        <Route path="/login" element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        } />

        <Route path="/register" element={
        
            <Register />
    
        } />

        <Route path="/inicio" element={
          <PrivateRoutes>
            <DashboardRoutes />
          </PrivateRoutes>
        } />

      </Routes>
    </BrowserRouter>
  )
}
