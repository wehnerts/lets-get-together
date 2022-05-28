import {ActionItem} from "../model/ActionItem";
import axios from "axios";
import {ActionItemDto} from "../dto/ActionItemDto";

export const getAllActionItems: () => Promise<ActionItem[]> = () => {
    return axios.get("/api/actionitem")
        .then(response => response.data)
}

export function getActionItemBy(id:string){
    return axios.get(`/api/actionitem/${id}`)
        .then(response => response.data)
}

export const postActionItem: (newActionItem: ActionItemDto)=>Promise<ActionItem> =(newActionItem) =>{
    return axios.post("/api/actionitem", newActionItem)
        .then(response => response.data)
}

export const removeActionItem: (id:string)=>Promise<void>=(id:string)=>{
    return axios.delete (`/api/actionitem/${id}`)
}