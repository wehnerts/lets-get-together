import logo from '../images/letsgettogether.png'
import "./TitleBar.css"
export default function TitleBar(){
    return (
        <div className={"titlebar"}>

            <img className={"title"} src={logo} alt={"Let's get together"}/>

        </div>
    )
}