import { Navigate } from "react-router-dom"
import { UserData } from "../context/UserContext"
import toast from "react-hot-toast"

const AuthChat = ({ children }) => {

  const {isActive} = UserData()

  if (!isActive) {
    toast.error("Login first")
    return <Navigate to="/" />
  }

  return children
}

export default AuthChat