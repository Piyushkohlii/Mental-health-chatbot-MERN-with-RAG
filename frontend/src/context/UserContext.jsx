import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { server } from "../main";

const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [btnLoading, setBtnLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [isAuth, setIsAuth] = useState(false)

    async function registerUser({ fullName, email, password, username }) {

        setBtnLoading(true)
        try {
            const { data } = await axios.post(
                `${server}/api/v1/user/register`,
                { fullName, email, password, username },
                { withCredentials: true }
            )
            toast.success(data.message)
            setUser(data.data.user)
            setIsAuth(true)
            return true
        } catch (err) {
            const msg = err.response?.data?.message || "Registration failed"
            setError(msg)
            toast.error(msg)
            return false
        } finally {
            setBtnLoading(false)
        }
    }

    const [loggedInUser, setLoggedInUser] = useState(null)

    async function loginUser(identifier, password) {
        setBtnLoading(true)
        try {
            const payload = {
                password
            }

            // check if identifier is email
            if (identifier.includes("@gmail.com")) {
                payload.email = identifier
            } else {
                payload.username = identifier
            }
            const { data } = await axios.post(
                `${server}/api/v1/user/login`,
                payload,
                {
                    withCredentials: true
                }
            )
            toast.success(data.message)
            setLoggedInUser(data.data.user)
            setIsAuth(true)
            return true
        } catch (error) {
            toast.error(error.response?.data?.message || "login unsuccessfull")
            return false
        } finally {
            setBtnLoading(false)
        }
    }

    async function logoutUser() {
        try {
            const { data } = await axios.post(
                `${server}/api/v1/user/logout`,
                {},
                {
                    withCredentials: true   // important to send cookies
                }
            )
            toast.success(data.message)
            setLoggedInUser(null) 
            setIsAuth(false) 
            setActiveUser(null)
            setIsActive(false)
        } catch (err) {
            toast.error(err.response?.data?.message || "Logout failed")
        }

    }

    const [loading, setLoading] = useState(true)
    
    const [activeUser,setActiveUser] = useState(null)
    const [isActive,setIsActive] = useState(false)
    async function fetchUser() {
        try {
            const { data } = await axios.get(`${server}/api/v1/user/me`, {
                withCredentials: true
            })
            setIsActive(true);
            setActiveUser(data);
        } catch (error) {
            console.log(error)
            setIsActive(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])


    async function refreshAccessToken() {
        try {
            const { data } = await axios.post(
                `${server}/api/v1/user/refresh-token`,
                {},
                {
                    withCredentials: true   // important: sends cookies
                }
            )
            return data
        } catch (err) {
            console.log(err.response?.data?.message || "Token refresh failed")
            throw err
        }
    }

    return (
        <UserContext.Provider value={{
            btnLoading, error,
            user, registerUser,
            loggedInUser, loginUser,
            logoutUser,
            loading, isActive ,activeUser,
            fetchUser,
            refreshAccessToken
        }}>
            {children}
            <Toaster />
        </UserContext.Provider>
    )

}

export const UserData = () => useContext(UserContext)