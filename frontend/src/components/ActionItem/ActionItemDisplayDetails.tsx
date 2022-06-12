import React from "react";
import {ActionItem} from "../../model/ActionItem";
type ActionItemDisplayProps ={
    detailedActionItem: ActionItem
}
export default function ActionItemDisplayDetails({detailedActionItem}:ActionItemDisplayProps) {
    return (
        <div className={"action-item-details"}>
            <div>Details</div>
                <div className={"action-title"}>
                    <p>id: {detailedActionItem.id}</p>
                    <p>Title: {detailedActionItem.actionTitle}</p>
                    {detailedActionItem.imageName&&
                        <img className={"actionimage"} src={detailedActionItem.imageName} alt={""} />}
                    <p>Description: {detailedActionItem.actionDescription}</p>
                    <p>Kinder: {detailedActionItem.childFriendly}</p>
                    <p>Saison: {detailedActionItem.openingSeason}</p>
                    <p>Opening hours: {detailedActionItem.openingHours}</p>
                    <p>Estimated duration: {detailedActionItem.estDuration}</p>
                    <p>Price: {detailedActionItem.price}</p>
                    <p>Homepage: &nbsp;
                        <a href={detailedActionItem.homepage}> {detailedActionItem.homepage}</a>
                    </p>

                </div>
        </div>
    )
}