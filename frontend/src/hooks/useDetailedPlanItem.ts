import {useState} from "react";
import {toast} from "react-toastify";
import {PlanItem} from "../model/PlanItem";
import {getPlanItemBy} from "../services/api-service-plan";

export default function useDetailedPlanItem(){
    const [detailedPlanItem, setDetailedPlanItem] = useState<PlanItem>()

    const getPlanItemById = (id:string)=>{
            getPlanItemBy(id)
            .then(data => setDetailedPlanItem(data))
            .catch((error)=>toast.error(error))
    }

    return {detailedPlanItem, getPlanItemById, setDetailedPlanItem}
}