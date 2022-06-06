import axios from "axios";
import {PlanItem} from "../model/PlanItem";
import {PlanItemDto} from "../dto/PlanItemDto";

export const getAllPlanItems: () => Promise<PlanItem[]> = () => {
    return axios.get("/api/planitem")
        .then(response => response.data)
}
export function getPlanItemBy(id:string) {
    return axios.get (`/api/planitem/${id}`)
        .then(response => response.data)
}

export const postPlanItem: (newPlanItem: PlanItemDto)=>Promise<PlanItem>=(newPlanItem)=>{
    return axios.post(`/api/planitem`, newPlanItem)
        .then(response=>response.data)
}