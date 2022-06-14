import axios from "axios";
import {MemberForWork} from "../model/MemberForWork";
import {EditedVoteUserDto} from "../dto/EditedVoteUserDto";

export const getAllMembers: (token?:string) => Promise<MemberForWork[]> = (token) => {
    return axios.get("/api/members", token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export const putMemberVoteItem: (editItem:EditedVoteUserDto, token?:string)=>Promise<MemberForWork>=(editItem:EditedVoteUserDto, token)=>{
    return axios.put(`/api/uservote`,editItem, token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}