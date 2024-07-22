import { Navigate, Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/Appbar";

const ProtectRoutes = () => {
 
    let userData = localStorage.getItem("userData");
    let token = userData ? JSON.parse(userData ) : ""
    
  return (
    token ? <ResponsiveAppBar/> : <Navigate to="/login" replace/>
  )
}

export default ProtectRoutes
