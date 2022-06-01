import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import "./ActionItemDetailPage.css"
import ActionItemDisplayDetails from "../components/ActionItem/ActionItemDisplayDetails";

import useDetailedActionItem from "../hooks/useDetailedActionItem";
import EditActionItem from "../components/ActionItem/EditActionItem";
import {ActionItem} from "../model/ActionItem";


type ActionItemDetailProps = {
    deleteActionItem: (id:string)=>void
    editActionItem: (editItem:ActionItem)=>Promise<ActionItem|void>
}
export default function ActionItemDetailPage({deleteActionItem, editActionItem}:ActionItemDetailProps){
    const {id} = useParams()
    const {detailedActionItem, getActionItemById} = useDetailedActionItem()
    const navigate = useNavigate()
    const [editingEnabled, setEditingEnabled] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            getActionItemById(id)
        }
        // eslint-disable-next-line
    }, [id])

    const toggleEdit = () => {
        setEditingEnabled(!editingEnabled);
    }

   return(
       <div>
           {detailedActionItem&&
           <div>
               {editingEnabled
                   ? <EditActionItem editActionItem={editActionItem} item={detailedActionItem}/>
                   : <ActionItemDisplayDetails detailedActionItem={detailedActionItem}
                                               toggleEdit={toggleEdit}/>}
           </div>}
           {detailedActionItem&&
           <button onClick={() => deleteActionItem(detailedActionItem.id)}> ❌ </button>}

           <button onClick={() => navigate(-1)}>Back</button>
       </div>
   )
}
