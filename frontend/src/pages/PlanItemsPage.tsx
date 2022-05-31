import React from "react";
import {useNavigate} from "react-router";
import PlanItemsGallery from "../components/PlanItem/PlanItemsGallery";
import {PlanItem} from "../model/PlanItem";


type PlanItemProps={
    planItems: PlanItem[]
}
const PlanItemsPage=({planItems}:PlanItemProps)=>{
    const navigate = useNavigate()

    return(
        <div>
            <div className={"gallery"}>
                <PlanItemsGallery planItems={planItems}/>
            </div>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
};
export default PlanItemsPage;