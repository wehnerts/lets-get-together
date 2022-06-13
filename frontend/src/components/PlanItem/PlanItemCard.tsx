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
        actionItems.forEach(item=> {
            if (item.id===planItem.actionItemId){
                setImage(item.imageName)
            }})})

    return(
        <div className={"plan-item-card"} onClick={()=>navigate(`/planitem/${planItem.id}`)}>
            <div className={"plan-title"}>{planItem.actionItemName}</div>
            {image&&
                <img className={"actionimage"} src={image} alt={""}/>}
            <div className={"plan-title"}>{planItem.planDescription}</div>
            <div className={"plan-title"}>{planItem.plannedBy}</div>
            <div className={"plan-title"}>{planItem.plannedOn}</div>
        </div>
    )
}

