import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
export const PublicRoutes = ({children}) => {
  const { user } = useContext(AuthContext);
  return user.isLogged  // si el usuario se loguea va a la ruta que indica el Navigate
          ? <Navigate to='/inicio' />
          // sino va a children que se encuentra en el archivo AppRouter
          : children
}
