import {PlanItem} from "../../model/PlanItem";
import React from "react";

type PlanItemDisplayProps = {
    detailedPlanItem: PlanItem
}

export default function PlanItemDisplayDetails({detailedPlanItem}: PlanItemDisplayProps) {
    return (
        <div className={"plan-item-details"}>
            <div>Details</div>
            <div className={"action-title"}>
                <div>id: {detailedPlanItem.id}</div>
                <div>ActionId: {detailedPlanItem.actionItemId}</div>
                <div>Aktion: {detailedPlanItem.actionItemName}</div>
                <div>Beschreibung: {detailedPlanItem.planDescription}</div>
                <div>Geplant am: {detailedPlanItem.plannedOn}</div>
                <div>Planer: {detailedPlanItem.plannedBy}</div>
                <div>Teilnehmer: {detailedPlanItem.finalGang.filter(item => (!item.isPlanned)).map(item => <div
                    key={item.id}>{item.username}</div>)}</div>
                <div>Optionen: {detailedPlanItem.dateOptions.map(item => <div
                    key={item.optionName}>{item.optionName} {item.optionDate}</div>)}</div>
                <div>Gewähltes Datum: {detailedPlanItem.finalDate}</div>
            </div>
        </div>
    )
}