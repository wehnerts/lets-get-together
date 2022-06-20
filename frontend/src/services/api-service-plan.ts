import axios from "axios";
import {PlanItem} from "../model/PlanItem";
import {PlanItemDto} from "../dto/PlanItemDto";

export const getAllPlanItems: (token?: string) => Promise<PlanItem[]> = (token) => {
    return axios.get("/api/planitems", token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export function getPlanItemBy(id: string, token?: string) {
    return axios.get(`/api/planitems/${id}`, token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export const postPlanItem: (newPlanItem: PlanItemDto, token?: string) => Promise<PlanItem> = (newPlanItem, token) => {
    return axios.post(`/api/planitems`, newPlanItem, token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export const removePlanItem: (id: string, token?: string) => Promise<void> = (id: string, token) => {
    return axios.delete(`/api/planitems/${id}`, token
        ? {headers: {"Authorization": token}}
        : {})
}

export const putPlanItem: (editItem: PlanItem, token?: string) => Promise<PlanItem> = (editItem: PlanItem, token) => {
    return axios.put(`/api/planitems`, editItem, token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}