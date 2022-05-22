import {Link} from "react-router-dom";

export default function MainPage(){
    return(
        <div className={"navi-buttons"}>
            <Link to="/actions"><button type="button">Actions</button> </Link>
            <Link to="/plans"><button type="button">Plans</button></Link>
        </div>

    )
}


