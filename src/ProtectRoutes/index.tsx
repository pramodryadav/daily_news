import { Navigate, Outlet } from "react-router-dom";


const ProtectRoutes = () => {
 
    let userData = localStorage.getItem("userData");
    let token = userData ? JSON.parse(userData ) : ""
    
  return (
    token ? <Outlet/> : <Navigate to="/login" replace/>
  )
}

export default ProtectRoutes