import {PlanItem} from "../../model/PlanItem";
import React, {useEffect, useState} from "react";
import VotingScorecard from "../Voting/VotingScorecard";
import {ActionItem} from "../../model/ActionItem";

type PlanItemDisplayProps = {
    detailedPlanItem: PlanItem
    actionItems: ActionItem[]
}

export default function PlanItemDisplayDetails({detailedPlanItem,actionItems}: PlanItemDisplayProps) {
    const [image, setImage] = useState("")
    useEffect(()=>{
        actionItems.forEach(item=> {
            if (item.id===detailedPlanItem.actionItemId){
                setImage(item.imageName)
            }
        })})
    return (
        <div className={"plan-item-details"}>
            <div>Details</div>
            <div className={"action-title"}>
                <div>id: {detailedPlanItem.id}</div>
                <div>ActionId: {detailedPlanItem.actionItemId}</div>
                <div>Aktion: {detailedPlanItem.actionItemName}</div>
                {image&&
                    <img className={"actionimage"} src={image} alt={""}/>}
                <div>Beschreibung: {detailedPlanItem.planDescription}</div>
                <div>Geplant am: {detailedPlanItem.plannedOn}</div>
                <div>Planer: {detailedPlanItem.plannedBy}</div>
                <div><VotingScorecard detailedPlanItem={detailedPlanItem}/></div>
                <div>Teilnehmer: {detailedPlanItem.finalGang.filter(item => (!item.isPlanned)).map(item => <div
                    key={item.id}>{item.username}</div>)}</div>
                <div>Optionen: {detailedPlanItem.dateOptions.map(item => <div
                    key={item.optionName}>{item.optionName} {item.optionDate}</div>)}</div>
                <div>Gewähltes Datum: {detailedPlanItem.finalDate}</div>
            </div>
        </div>
    )
}