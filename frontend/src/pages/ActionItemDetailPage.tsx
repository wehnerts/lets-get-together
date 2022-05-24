import {useNavigate} from "react-router";
import React from "react";
import "./ActionItemDetailPage.css"
import ActionItemDisplayDetails from "../components/ActionItemDisplayDetails";

export default function ActionItemDetailPage(){
   const navigate = useNavigate()
   return(
       <div> Was geht digger?
       <ActionItemDisplayDetails/>
           <button onClick={() => navigate(-1)}>Back</button>
       </div>
   )
}