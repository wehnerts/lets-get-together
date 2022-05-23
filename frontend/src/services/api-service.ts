import {ActionItem} from "../model/ActionItem";
import axios from "axios";

export const getAllActionItems: () => Promise<ActionItem[]> = () => {
    return axios.get("/api/actionitem")
        .then(response => response.data)
}

export function getActionItemBy(id:string){
    return axios.get(`/api/actionitem/${id}`)
        .then(response => response.data)
}