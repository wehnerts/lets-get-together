import {useEffect, useState} from "react";
import {PlanItem} from "../model/PlanItem";
import {toast} from "react-toastify";
import {getAllPlanItems} from "../services/api-service-plan";

export default function usePlanItems(){
    const [planItems, setPlanItems]= useState<PlanItem[]>([])

    useEffect(()=>{
        getAllPlanItems()
            .then(allPlanI => setPlanItems(allPlanI))
            .catch(()=>toast.error("Connection failed! Please retry later"))
    },[])
    return {planItems}
}