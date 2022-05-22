import {useNavigate} from "react-router"
import ActionItemsGallery from "../components/ActionItemsGallery";
import React from "react";
import useActionItems from "../hooks/useActionItems";



const ActionItemsPage=()=>{
    const {actionItems} = useActionItems()
    const navigate = useNavigate()

    return(
        <div>
            <ActionItemsGallery actionItems={actionItems}/>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
};
export default ActionItemsPage;