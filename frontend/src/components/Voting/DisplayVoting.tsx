import "./DisplayVoting.css"
import {PlanItem} from "../../model/PlanItem";
import {useState} from "react";
import {toast} from "react-toastify";
import {Button} from "@mui/material";

type DisplayVotingProps = {
    detailedPlanItem: PlanItem
}
export default function DisplayVoting({detailedPlanItem}: DisplayVotingProps) {
    const [votingEnabled, setVotingEnabled] = useState(false)

    const toggleVoting = (id: string) => {
        setVotingEnabled(!votingEnabled)
        toast.info("Hallo das war " + id)
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
                <div className={"tablerow"}>
                    <div>
                        <div className={"usrName"}>{item.username}</div>
                        <div>{item.opt1}</div>
                        <div>{item.opt2}</div>
                        <div>{item.opt3}</div>
                        <Button sx={{color:'#f4e07f'}} onClick={() => toggleVoting(item.id)}>Vote</Button>
                    </div>
                </div>)
            }</div>
        </div>


    )


}