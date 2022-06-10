import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {MemberForWork} from "../model/MemberForWork";
import {getAllMembers, putMemberItem} from "../services/api-service-members";


export default function useMembers(){
    const [membersForWork, setMembersForWork]= useState<MemberForWork[]>([])

    useEffect(()=>{
        getAllMembers()
            .then(allMembers => setMembersForWork(allMembers))
            .catch(()=>toast.error("Connection failed! Please try again later"))
    },[])

    membersForWork.forEach((member)=>{{member.isPlanned=true} {member.opt1="0"} {member.opt2="0"} {member.opt3="0"}} )

    const editMemberItem=(memberEdit:MemberForWork)=>{
        return putMemberItem(memberEdit)
            .then(editedItem=>{
                toast.success("Thanks for the Vote" +editedItem.id+" updated")
                return editedItem})
            .catch(()=>{
                toast.error("Update failed. Please try again later.")
            })
    }

    return {membersForWork, editMemberItem}

}