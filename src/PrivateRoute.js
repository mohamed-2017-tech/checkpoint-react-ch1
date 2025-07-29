import { Navigate } from "react-router-dom"

const PrivateRouter = ({ children, isAuth }) => {
   return (
       isAuth === true ? children : <Navigate to='/login' replace />
   )
}

export default PrivateRouter