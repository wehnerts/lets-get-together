import {useNavigate, useParams} from "react-router";
import React, {useEffect} from "react";
import "./ActionItemDetailPage.css"
import useDetailedPlanItem from "../hooks/useDetailedPlanItem";
import PlanItemDisplayDetails from "../components/PlanItem/PlanItemDisplayDetails";

export default function PlanItemDetailPage(){
    const {id} = useParams()
    const {detailedPlanItem, getPlanItemById} = useDetailedPlanItem()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getPlanItemById(id)
        }
        // eslint-disable-next-line
    }, [id])

   return(
       <div>
           {detailedPlanItem&&
           <div>
               <PlanItemDisplayDetails detailedPlanItem={detailedPlanItem}/>
           </div>}
           <button onClick={() => navigate(-1)}>Back</button>
       </div>
   )
}
