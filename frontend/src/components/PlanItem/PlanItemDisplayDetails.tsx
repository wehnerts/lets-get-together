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
                <p>Teilnehmer: "detailedPlanItem.finalGang"</p>
                <p>Optionen: "detailedPlanItem.dateOptions"</p>
                <p>Gewähltes Datum: {detailedPlanItem.finalDate}</p>
                <p>Status: {detailedPlanItem.status}</p>
            </div>
        </div>
    )
}