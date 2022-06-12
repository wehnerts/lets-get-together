import "./VotingScorecard.css"
import {PlanItem} from "../../model/PlanItem";
import {useState} from "react";
import {Button} from "@mui/material";
import UserVote from "./UserVote";

type DisplayVotingProps = {
    detailedPlanItem: PlanItem
}


export default function VotingScorecard({detailedPlanItem}: DisplayVotingProps) {
    const [votingEnabled, setVotingEnabled] = useState(false)
    const [rowItem, setRowItem] = useState('')

    const toggleVoting = (id:string) => {
        setVotingEnabled((prevState => !prevState))
        setRowItem(id)

    }

    return (
        <div className={"table"}>
            <div className={"tablehead"}>
                <div>Name:</div>
                <div>{detailedPlanItem.dateOptions.map(item =>
                    <div>Opt {item.optionName} <br/>{item.optionDate}</div>)}
                </div>
            </div>

            <div>{detailedPlanItem.finalGang.filter(item => (!item.isPlanned)).map(item =>
                <div className={"tablerow"} key={item.id}>
                <div>
                    <div className={"usrName"}>{item.username}</div>
                    <div>{item.opt1}</div>
                    <div>{item.opt2}</div>
                    <div>{item.opt3}</div>
                    <Button sx={{color: '#f4e07f'}} onClick={() => toggleVoting(item.id)}>{!votingEnabled?"Vote":"CLOSE"}</Button>
                </div>
                    {rowItem===item.id&&votingEnabled?<UserVote member={item} planItem={detailedPlanItem}/>:<div/>}
                </div>)
            }</div>
        </div>

    )

}