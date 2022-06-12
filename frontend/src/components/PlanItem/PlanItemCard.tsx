import {PlanItem} from "../../model/PlanItem";
import {useNavigate} from "react-router";
import './PlanItemCard.css'
import React, {useEffect, useState} from "react";
import {ActionItem} from "../../model/ActionItem";

type PlanItemCardProps ={
    planItem:PlanItem
    actionItems: ActionItem[]
}

export default function PlanItemCard({planItem, actionItems}:PlanItemCardProps){
    const [image, setImage] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        actionItems.filter(item=>planItem.actionItemId===item.id).map(img=>setImage(img.imageName))},[])
    return(
        <div className={"plan-item-card"} onClick={()=>navigate(`/planitem/${planItem.id}`)}>
            <div className={"plan-title"}>{planItem.actionItemName}</div>
            {image&&
                <img className={"actionimage"} src={image} alt={"Sorry, no pic! Please set another Picture"}/>}
            <div className={"plan-title"}>{planItem.planDescription}</div>
            <div className={"plan-title"}>{planItem.plannedBy}</div>
            <div className={"plan-title"}>{planItem.plannedOn}</div>
        </div>
    )
}
