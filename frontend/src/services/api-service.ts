import {ActionItem} from "../model/ActionItem";
import axios from "axios";

export const getAllActionItems: () => Promise<ActionItem[]> = () => {
    return axios.get("/api/actionitem")
        .then(response => response.data)
}