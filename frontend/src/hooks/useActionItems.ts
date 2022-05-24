import {ActionItem} from "../model/ActionItem";
import {useEffect, useState} from "react";
import {getAllActionItems, postActionItem} from "../services/api-service";
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
    return {actionItems, addNewActionItem}
}