import React from "react";
import {ActionItem} from "../../model/ActionItem";
import "../css/ActionItemDisplayDetails.css"
type ActionItemDisplayProps ={
    detailedActionItem: ActionItem
}
export default function ActionItemDisplayDetails({detailedActionItem}:ActionItemDisplayProps) {
    return (
        <div className={"action-item-details"}>
            Action Details
                <div className={"action-title"}>
                    <h1>{detailedActionItem.actionTitle}</h1>
                    <p className={"id"}>({detailedActionItem.id})</p>
                    {detailedActionItem.imageName&&
                        <img className={"actionimage"} src={detailedActionItem.imageName} alt={""} />}
                    <p>Beschreibung:<br/><div className={"float"}> {detailedActionItem.actionDescription}</div></p>
                    <p>Kinder:<br/> <div className={"float"}>{detailedActionItem.childFriendly}</div></p>
                    <p>Saison: <br/><div className={"float"}>{detailedActionItem.openingSeason}</div></p>
                    <p>Geöffnet:<br/> <div className={"float"}>{detailedActionItem.openingHours}</div></p>
                    <p>Dauer:<br/> <div className={"float"}>{detailedActionItem.estDuration}</div></p>
                    <p>Kosten:<br/> <div className={"float"}>{detailedActionItem.price}</div></p>
                    <p>Homepage:<br/>
                        <div className={"float"}> <a href={detailedActionItem.homepage}> {detailedActionItem.homepage}</a></div>
                    </p>

                </div>
        </div>
    )
}