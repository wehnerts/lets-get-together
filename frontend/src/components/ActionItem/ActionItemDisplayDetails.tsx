import React from "react";
import {ActionItem} from "../../model/ActionItem";
type ActionItemDisplayProps ={
    detailedActionItem: ActionItem
    toggleEdit:()=>void
}
export default function ActionItemDisplayDetails({detailedActionItem, toggleEdit}:ActionItemDisplayProps) {
    return (
        <div className={"action-item-details"}>
            <div>Details</div>
                <div className={"action-title"}>
                    <p>id: {detailedActionItem.id}</p>
                    <p>Title: {detailedActionItem.actionTitle}</p>
                    <p>Description: {detailedActionItem.actionDescription}</p>
                    <p>{detailedActionItem.childFriendly}</p>
                    <p>Saison: {detailedActionItem.openingSeason}</p>
                    <p>Opening hours: {detailedActionItem.openingHours}</p>
                    <p>Estimated duration: {detailedActionItem.estDuration}</p>
                    <p>Price: {detailedActionItem.price}</p>
                    <p>Homepage:
                        <a href={detailedActionItem.homepage}> {detailedActionItem.homepage}</a>
                    </p>
                    <button onClick={toggleEdit}>Edit</button>
                </div>
        </div>
    )
}