import {useEffect, useState} from "react";
import {PlanItem} from "../model/PlanItem";
import {toast} from "react-toastify";
import {getAllPlanItems, postPlanItem, putPlanItem, removePlanItem} from "../services/api-service-plan";
import { PlanItemDto } from "../dto/PlanItemDto";


export default function usePlanItems(){
    const [planItems, setPlanItems]= useState<PlanItem[]>([])

    useEffect(()=>{
        getAllPlanItems()
            .then(allPlanI => setPlanItems(allPlanI))
            .catch(()=>toast.error("Connection failed! Please try again later"))
    },[])

    const addNewPlanItem = (newPlanItem : PlanItemDto)=>{
        postPlanItem(newPlanItem)
            .then((addedPlanItem) => setPlanItems([...planItems, addedPlanItem]))
            .then(()=>toast.success("Es wurde eine neuer Plan angelegt!"))
            .catch(()=>toast.error("Something went wrong!"))
    }

    const deletePlanItem = (id:string)=>{
        removePlanItem(id)
            .then(() => setPlanItems(planItems.filter(planItem => planItem.id !==id)))
            .then(()=>toast.success("PlanItem wurde gelöscht"))
            .catch(()=>toast.error("Error while remove ActionItem"))
    }

    const editPlanItem=(editItem:PlanItem)=>{
        return putPlanItem(editItem)
            .then(editedItem=>{
                setPlanItems(planItems.map(item=>item.id===editedItem.id?editedItem:item))
                toast.success("PlanItem" +editedItem.id+" updated")
                return editedItem})
            .catch(()=>{
                toast.error("Update failed. Please try again later.")
            })
    }
    return {planItems, addNewPlanItem, deletePlanItem, editPlanItem}
}