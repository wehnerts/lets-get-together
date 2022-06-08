import axios from "axios";
import {PlanItem} from "../model/PlanItem";
import {MemberForWork} from "../model/MemberForWork";

export const getAllMembers: () => Promise<MemberForWork[]> = () => {
    return axios.get("/api/members")
        .then(response => response.data)
}


