import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { Login } from "./Login";

export const Logout = () => {
    const logout = () => { localStorage.clear() }
    const history = useHistory()
    const handleLogout = (e) => {
        e.preventDefault()

        logout()
        history.push("/")


        
    }
    return handleLogout
}