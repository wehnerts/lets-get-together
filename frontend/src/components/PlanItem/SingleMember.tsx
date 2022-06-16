import {MemberForWork} from "../../model/MemberForWork";
import {useState} from "react";
import "../css/SingleMember.css"

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
            <div className={"mainline"}>
                <input className={"mainChecker"} type={"checkbox"} id={memberForWork.id} name={"isPlanned"}
                       checked={checked} onChange={handleChange}/>
                <div>{memberForWork.username} </div>
            </div>
            <div className={"id"}>Id: {memberForWork.id} {memberForWork.isPlanned}</div>
            <br/>

        </div>
    )
}