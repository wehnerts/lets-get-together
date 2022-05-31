import {useState} from "react";
import {ActionItem} from "../model/ActionItem";
import {toast} from "react-toastify";
import {getActionItemBy} from "../services/api-service-action";


export default function useDetailedActionItem(){
    const [detailedActionItem, setDetailedActionItem] = useState<ActionItem>()

    const getActionItemById = (id:string)=>{
            getActionItemBy(id)
            .then(data => setDetailedActionItem(data))
            .catch((error)=>toast.error(error))
    }

    return {detailedActionItem, getActionItemById, setDetailedActionItem}
}