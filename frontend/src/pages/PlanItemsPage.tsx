import React from "react";
import {useNavigate} from "react-router";

export default function PlanItemsPage(){
    const navigate = useNavigate()
    return(
        <div>
            <div>Here will be plans</div>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
}