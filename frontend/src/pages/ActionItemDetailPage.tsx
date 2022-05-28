import {useNavigate, useParams} from "react-router";
import React, {useEffect} from "react";
import "./ActionItemDetailPage.css"
import ActionItemDisplayDetails from "../components/ActionItemDisplayDetails";
import useActionItems from "../hooks/useActionItems";
import useDetailedActionItem from "../hooks/useDetailedActionItem";

export default function ActionItemDetailPage(){
    const {id} = useParams()
    const {detailedActionItem, getActionItemById} = useDetailedActionItem()
    const navigate = useNavigate()
    const {deleteActionItem}=useActionItems()

    useEffect(() => {
        if (id) {
            getActionItemById(id)
        }
        // eslint-disable-next-line
    }, [id])

   return(
       <div>
           {detailedActionItem&& <div>
           <ActionItemDisplayDetails detailedActionItem={detailedActionItem}/>
           <button onClick={() => deleteActionItem(detailedActionItem.id)}> ❌ </button>
           </div>}
           <button onClick={() => navigate(-1)}>Back</button>
       </div>
   )
}
