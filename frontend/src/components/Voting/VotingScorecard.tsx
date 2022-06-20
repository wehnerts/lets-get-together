import "../css/VotingScorecard.css"
import {PlanItem} from "../../model/PlanItem";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import UserVote from "./UserVote";

type DisplayVotingProps = {
    detailedPlanItem: PlanItem
}

export default function VotingScorecard({detailedPlanItem}: DisplayVotingProps) {
    const [votingEnabled, setVotingEnabled] = useState(false)
    const [rowItem, setRowItem] = useState('')
    const [optName, setOptName] = useState("0")

    const toggleVoting = (id: string) => {
        setVotingEnabled((prevState => !prevState))
        setRowItem(id)
    }
    useEffect(() => {
            detailedPlanItem.dateOptions.forEach(item => {
                setOptName(item.optionName)
            })
        }
        // eslint-disable-next-line
        , [])


    return (
        <div className={"table"}>
            <br/>
            <div className={"row1"}>
                <div>
                    <div className={"cn"}/>
                    {detailedPlanItem.dateOptions.map(item =>
                        <div className={"cx"}>{item.optionDate}</div>)}</div>
                <div className={"cx"}/>
            </div>
            <br/>
            <div>{detailedPlanItem.finalGang.filter(item => (!item.isPlanned)).map(item =>
                <div className={"row"} key={item.id}>
                    <div>
                        <div className={"c1"}>{item.username}</div>
                        {(optName === "1" || optName === "2" || optName === "3") &&
                            <div className={"c2"}>{item.opt1}</div>}
                        {(optName === "2" || optName === "3") &&
                            <div className={"c2"}>{item.opt2}</div>}
                        {optName === "3" &&
                            <div className={"c2"}>{item.opt3}</div>}
                        <div className={"c2"}><Button sx={{color: '#f4e07f'}}
                                                      onClick={() => toggleVoting(item.id)}>{!votingEnabled ? "Vote" : "CLOSE"}</Button>
                        </div>
                    </div>
                    {rowItem === item.id && votingEnabled ?
                        <UserVote optName={optName} member={item} planItem={detailedPlanItem}/> : <div/>}
                </div>)}
                <br/>
            </div>
            <br/>
        </div>

    )

}