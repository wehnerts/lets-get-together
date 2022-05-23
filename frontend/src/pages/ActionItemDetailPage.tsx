import {useNavigate, useParams} from "react-router";
import React, {useEffect} from "react";
import useDetailedActionItem from "../hooks/useDetailedActionItem";
import "./ActionItemDetailPage.css"


export default function ActionItemDetailPage(){
    const navigate = useNavigate()
    const {id} = useParams()
    const {detailedActionItem, getActionItemById}=useDetailedActionItem()

    useEffect(()=>{
        if(id){
            getActionItemById(id)
        }
        // eslint-disable-next-line
        },[id])

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
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
}