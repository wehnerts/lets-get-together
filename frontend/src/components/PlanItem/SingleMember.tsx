import {MemberForWork} from "../../model/MemberForWork";
import {useEffect, useState} from "react";

type SingleMemberProps ={
    memberForWork:MemberForWork
}

export default function SingleMember({memberForWork}:SingleMemberProps){
    const [checked, setChecked] = useState(true)

    const handleChange = () =>{
        setChecked(!checked)
        memberForWork.isPlanned  = !checked
    }

    return(
        <div>
            <div>Name: {memberForWork.username} </div><div>Id: {memberForWork.id} {memberForWork.isPlanned}</div>
            <input type={"checkbox"} id={memberForWork.id} name={"isPlanned"} checked={checked} onChange={handleChange} />
        </div>
    )
}