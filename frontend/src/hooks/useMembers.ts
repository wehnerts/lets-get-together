import {useContext, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {MemberForWork} from "../model/MemberForWork";
import {getAllMembers, putMemberVoteItem} from "../services/api-service-members";
import {EditedVoteUserDto} from "../dto/EditedVoteUserDto";
import {AuthContext} from "../context/AuthProvider";

export default function useMembers() {
    const [membersForWork, setMembersForWork] = useState<MemberForWork[]>([])
    const {token} = useContext(AuthContext);

    useEffect(() => {
        getAllMembers(token)
            .then(allMembers => setMembersForWork(allMembers))
            .catch(() => toast.error("Connection failed! Please try again later"))
    }, [token])

    membersForWork.forEach((member) => {
        member.isPlanned = true
        member.opt1 = "0"
        member.opt2 = "0"
        member.opt3 = "0"
    })

    const editMemberVoteItem = (memberEdit: EditedVoteUserDto) => {
        return putMemberVoteItem(memberEdit, token)
            .then(editedItem => {
                toast.success("Thanks for the Vote" + editedItem.id + " updated")
                return editedItem
            })
            .catch(() => {
                toast.error("Update failed. Please try again later.")
            })
    }

    return {membersForWork, editMemberItem: editMemberVoteItem}

}