import {ActionItem} from "../model/ActionItem";
import axios from "axios";
import {ActionItemDto} from "../dto/ActionItemDto";

export const getAllActionItems: (token?: string) => Promise<ActionItem[]> = (token) => {
    return axios.get("/api/actionitem", token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export function getActionItemBy(id: string, token?: string) {
    return axios.get(`/api/actionitem/${id}`, token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export const postActionItem: (newActionItem: ActionItemDto, token?: string) => Promise<ActionItem> = (newActionItem, token) => {
    return axios.post("/api/actionitem", newActionItem, token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export const removeActionItem: (id: string, token?: string) => Promise<void> = (id: string, token) => {
    return axios.delete(`/api/actionitem/${id}`, token
        ? {headers: {"Authorization": token}}
        : {})
}

export const putActionItem: (editItem: ActionItem, token?: string) => Promise<ActionItem> = (editItem: ActionItem, token) => {
    return axios.put(`/api/actionitem`, editItem, token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}