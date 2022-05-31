import axios from "axios";
import {PlanItem} from "../model/PlanItem";

export const getAllPlanItems: () => Promise<PlanItem[]> = () => {
    return axios.get("/api/planitem")
        .then(response => response.data)
}


