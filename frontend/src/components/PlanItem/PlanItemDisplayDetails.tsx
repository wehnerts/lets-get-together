import {PlanItem} from "../../model/PlanItem";
import React from "react";

type PlanItemDisplayProps ={
    detailedPlanItem: PlanItem
}

export default function PlanItemDisplayDetails({detailedPlanItem}:PlanItemDisplayProps) {
    return (
        <div className={"plan-item-details"}>
            <div>Details</div>
            <div className={"action-title"}>
                <p>id: {detailedPlanItem.id}</p>
                <p>ActionId: {detailedPlanItem.actionItemId}</p>
                <p>Aktion: {detailedPlanItem.actionItemName}</p>
                <p>Beschreibung: {detailedPlanItem.planDescription}</p>
                <p>Geplant am: {detailedPlanItem.plannedOn}</p>
                <p>Planer: {detailedPlanItem.plannedBy}</p>
                <p>Teilnehmer: {detailedPlanItem.finalGang.filter(item=>(!item.isPlanned)).map(item=> <div key={item.id}>{item.username}</div>)}</p>
                <p>Optionen: {detailedPlanItem.dateOptions.map( item=> <div key={item.optionName}>{item.optionName} {item.optionDate}</div>)}</p>
                <p>Gewähltes Datum: {detailedPlanItem.finalDate}</p>
                <p>Status: {detailedPlanItem.status}</p>
            </div>
        </div>
    )
}