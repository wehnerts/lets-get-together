import axios from "axios";
import {PlanItem} from "../model/PlanItem";
import {PlanItemDto} from "../dto/PlanItemDto";

export const getAllPlanItems: () => Promise<PlanItem[]> = () => {
    return axios.get("/api/planitems")
        .then(response => response.data)
}

export function getPlanItemBy(id:string) {
    return axios.get (`/api/planitems/${id}`)
        .then(response => response.data)
}

export const postPlanItem: (newPlanItem: PlanItemDto)=>Promise<PlanItem>=(newPlanItem)=>{
    return axios.post(`/api/planitems`, newPlanItem)
        .then(response=>response.data)
}

export const removePlanItem: (id:string)=>Promise<void>=(id:string)=>{
    return axios.delete (`/api/planitems/${id}`)
}

export const putPlanItem: (editItem:PlanItem)=>Promise<PlanItem>=(editItem:PlanItem)=>{
    return axios.put(`/api/planitems`,editItem)
        .then(response => response.data)
}