import {useContext} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {AuthContext} from "../context/AuthProvider";
import useSecurityToken from "../hooks/useSecurityToken";

export default function RequireAuth() {
    const {token} = useContext(AuthContext)
    const {checkToken} = useSecurityToken()
    checkToken()
    return (token ? <Outlet/> : <Navigate to={"/login"}/>)
}