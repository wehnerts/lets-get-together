import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {MemberForWork} from "../model/MemberForWork";
import {getAllMembers} from "../services/api-service-members";

export default function useMembers(){
    const [membersForWork, setMembersForWork]= useState<MemberForWork[]>([])

    useEffect(()=>{
        getAllMembers()
            .then(allMembers => setMembersForWork(allMembers))
            .catch(()=>toast.error("Connection failed! Please try again later"))
    },[])

    membersForWork.forEach((member)=>{{member.isPlanned=true} {member.opt1="0"} {member.opt2="0"} {member.opt3="0"}} )

    return {membersForWork}

}