import {useEffect, useState} from "react";
import {PlanItem} from "../model/PlanItem";
import {toast} from "react-toastify";
import {getAllPlanItems, postPlanItem} from "../services/api-service-plan";
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

    return {planItems, addNewPlanItem}
}