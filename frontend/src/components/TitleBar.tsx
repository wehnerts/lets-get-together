import logo from '../images/letsgettogether.png'
import "./css/TitleBar.css"
import {useNavigate} from "react-router";
import Button from '@mui/material/Button';
import home from '../images/home-free-icon-font.png'
import signOut from '../images/sign-out-free-icon-font.png'

export default function TitleBar() {
    const navigate = useNavigate()

    const Logout = () => {
        localStorage.clear()
        navigate("/login")
    }

    return (
        <div className={"titlebar"}>
            <img className={"title"} src={logo} alt={"Let's get together"}/>
            <div className={"navibuttons"}>
                <Button onClick={() => navigate("/")}><img className={"navicon"} src={home} alt={"Home"}/></Button>
                <Button onClick={() => Logout()}>{<img className={"navicon"} src={signOut} alt={"Logout"}/>}</Button>
            </div>
        </div>
    )
}