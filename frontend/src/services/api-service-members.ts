import axios from "axios";
import {MemberForWork} from "../model/MemberForWork";

export const getAllMembers: () => Promise<MemberForWork[]> = () => {
    return axios.get("/api/members")
        .then(response => response.data)
}


export const putMemberItem: (editItem:MemberForWork)=>Promise<MemberForWork>=(editItem:MemberForWork)=>{
    return axios.put(`/api/members`,editItem)
        .then(response => response.data)
}