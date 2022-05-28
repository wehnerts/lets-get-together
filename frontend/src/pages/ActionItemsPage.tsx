import {useNavigate} from "react-router"
import ActionItemsGallery from "../components/ActionItemsGallery";
import React from "react";
import {ActionItem} from "../model/ActionItem";
import './ActionItemsPage.css'

type NewActionItemProps={
    actionItems: ActionItem[]
}

const ActionItemsPage=({actionItems}:NewActionItemProps)=>{
    const navigate = useNavigate()
    return(
        <div>
            <div className={"gallery"}>
            <ActionItemsGallery actionItems={actionItems}/>
            </div>
            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={() => navigate("/new-action")}>New Action</button>
        </div>
    )
};
export default ActionItemsPage;