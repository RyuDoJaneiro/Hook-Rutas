import { Route, Routes } from "react-router-dom"
import { NavBar } from "../ui/NavBar"
import { Home } from "../pages/Home"


export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}
