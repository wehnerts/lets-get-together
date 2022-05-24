import {useParams} from "react-router";
import useDetailedActionItem from "../hooks/useDetailedActionItem";
import React, {useEffect} from "react";
export default function ActionItemDisplayDetails() {

    const {id} = useParams()
    const {detailedActionItem, getActionItemById} = useDetailedActionItem()

    useEffect(() => {
        if (id) {
            getActionItemById(id)
        }
        // eslint-disable-next-line
    }, [id])

    return (
        <div className={"action-item-details"}>
            <div>Hyper Hyper!</div>
            {detailedActionItem &&
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
                        <a href={detailedActionItem.homepage}> {detailedActionItem.homepage}</a></p>
                </div>}

        </div>
    )
}