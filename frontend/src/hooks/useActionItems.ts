import {ActionItem} from "../model/ActionItem";
import {useEffect, useState} from "react";
import {getAllActionItems} from "../services/api-service";
import {toast} from "react-toastify";

export default function useActionItems(){
    const [actionItems, setActionItems] = useState<ActionItem[]>([])

    useEffect(()=>{
        getAllActionItems()
            .then(allActionItems => setActionItems(allActionItems))
            .catch(()=>toast.error("Connection failed! Please retry later."))

    })
    return {actionItems}
}