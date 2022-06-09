import {ActionItem} from "../model/ActionItem";
import {useEffect, useState} from "react";
import {getAllActionItems, postActionItem, putActionItem, removeActionItem} from "../services/api-service-action";
import {toast} from "react-toastify";
import {ActionItemDto} from "../dto/ActionItemDto";


export default function useActionItems(){
    const [actionItems, setActionItems] = useState<ActionItem[]>([])

    useEffect(()=>{
        getAllActionItems()
            .then(allActionItems => setActionItems(allActionItems))
            .catch(()=>toast.error("Connection failed! Please retry later."))
    },[])

    const addNewActionItem = (newActionItem : ActionItemDto)=>{
        postActionItem(newActionItem)
            .then((addedActionItem) => setActionItems([...actionItems, addedActionItem]))
            .then(()=>toast.success("Es wurde eine neue Action hinzugefügt!"))
            .catch(()=>toast.error("Something went wrong!"))
    }

    const deleteActionItem = (id:string)=>{
        removeActionItem(id)
            .then(() => setActionItems(actionItems.filter(actionItem => actionItem.id !==id)))
            .then(()=>toast.success("ActionItem wurde gelöscht"))
            .catch(()=>toast.error("Error while remove ActionItem"))
    }

    const editActionItem=(editItem:ActionItem)=>{
        return putActionItem(editItem)
            .then(editEdItem=>{
                setActionItems(actionItems.map(item=>item.id===editEdItem.id?editEdItem:item))
                toast.success("Action item " +editEdItem.id+" updated")
                return editEdItem})
            .catch(()=>{
                toast.error("Update failed. Please try again later.")
            })
    }

    return {actionItems, addNewActionItem, deleteActionItem, editActionItem}
}