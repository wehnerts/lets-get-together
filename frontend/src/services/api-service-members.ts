import axios from "axios";
import {MemberForWork} from "../model/MemberForWork";
import {EditedVoteUserDto} from "../dto/EditedVoteUserDto";

export const getAllMembers: () => Promise<MemberForWork[]> = () => {
    return axios.get("/api/members")
        .then(response => response.data)
}

export const putMemberVoteItem: (editItem:EditedVoteUserDto)=>Promise<MemberForWork>=(editItem:EditedVoteUserDto)=>{
    return axios.put(`/api/uservote`,editItem)
        .then(response => response.data)
}