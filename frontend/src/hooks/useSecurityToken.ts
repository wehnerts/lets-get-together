import jwtDecode from "jwt-decode";
import {JwtBody} from "../model/JwtBody";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import {useNavigate} from "react-router";


export default function useSecurityToken() {
    const {token} = useContext(AuthContext)
    const navigate = useNavigate()

    const checkToken = () => {

        let currentDate = new Date();
        if (token) {
            jwtDecode(token)
            let decoded: JwtBody = jwtDecode(token)
            if (1000 * decoded.exp < currentDate.getTime()) {
                localStorage.clear()
                navigate("/login")
            }
        } else if (!token) {
            navigate("/login")
        }

    }
    return {checkToken}
}