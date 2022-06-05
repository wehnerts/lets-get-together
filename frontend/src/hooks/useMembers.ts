import {useEffect, useState} from "react";
import {PlanItem} from "../model/PlanItem";
import {toast} from "react-toastify";
import {getAllPlanItems} from "../services/api-service-plan";
import {MemberForWork} from "../model/MemberForWork";
import {getAllMembers} from "../services/api-service-members";

export default function useMembers(){
    const [membersForWork, setMembersForWork]= useState<MemberForWork[]>([])

    useEffect(()=>{
        getAllMembers()
            .then(allMembers => setMembersForWork(allMembers))
            .catch(()=>toast.error("Connection failed! Please try again later"))
    },[])

    membersForWork.forEach((member)=>{member.isPlanned=true})

    return {membersForWork}

}