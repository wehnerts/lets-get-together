import React, {FormEvent, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router"
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import useDetailedActionItem from "../hooks/useDetailedActionItem";
import './NewPlanItem.css'
import {MemberForWork} from "../model/MemberForWork";
import {PlanItemDto} from "../dto/PlanItemDto";
import {DateOption} from "../model/DateOption";
import SingleMember from "../components/PlanItem/SingleMember";
import {SingleDateOption} from "../components/PlanItem/SingleDateOption";
import usePlanItems from "../hooks/usePlanItems";

type NewPlanItemProps = {
    membersForWork: MemberForWork[]

}

export default function NewPlanItem({membersForWork}:NewPlanItemProps) {
    const {actionId} = useParams()
    const navigate = useNavigate()
    const {addNewPlanItem} = usePlanItems()
    const {detailedActionItem, getActionItemById} = useDetailedActionItem()
    const [planDescription, setPlanDescription] = useState<string>('')
    const [plannedOn, setPlannedOn] = useState<string>('')
    const [plannedBy, setPlannedBy] = useState<string>('')
    const [finalDate, setFinalDate] = useState<string>('')
    const [status, setStatus] = useState<string>('DRAFT')
    const [dateOptions] = useState<DateOption[]>
    ([{optionName: '1', optionDate: ''}, {optionName: '2', optionDate: ''},
        {optionName: '3', optionDate: ''}])

    useEffect(() => {
        if (actionId) {
            getActionItemById(actionId)
        }
        // eslint-disable-next-line
    }, [actionId])

    const onAdd = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!actionId) {
            toast.error("Bitte erst eine Action wählen")
            return
        }
        if (actionId) {
            const newPlanItem: PlanItemDto = {
                actionItemId: actionId,
                planDescription: planDescription,
                plannedOn: plannedOn,
                plannedBy: plannedBy,
                finalGang: membersForWork.filter(item => (item.isPlanned)),
                dateOptions: dateOptions.filter(item => (item.optionDate)),
                finalDate: finalDate,
                status: status
            }
            addNewPlanItem(newPlanItem)
            navigate(-1)
        }
    }
    return (
        <div className={"new-plan-item"}>
            {detailedActionItem &&
                <div>
                    <div>Du hast die Aktion "{detailedActionItem.actionTitle}" ausgewählt, um eine Veranstaltung zu
                        planen:
                    </div>
                    <div>Description: {detailedActionItem.actionDescription}</div>
                    <div>Für Kinder: {detailedActionItem.childFriendly}</div>
                    <div>Estimated duration: {detailedActionItem.estDuration}</div>
                    <div>Price: {detailedActionItem.price}</div>
                    <div>Homepage: &nbsp;
                        <a href={detailedActionItem.homepage}> {detailedActionItem.homepage}</a>
                    </div>
                </div>}
            <br/>
            <form onSubmit ={onAdd}>
                <div>Beschreibung: <input type={"text"} placeholder="Add a new item" value={planDescription}
                                          onChange={event => setPlanDescription(event.target.value)}/></div>
                <div>Geplant am: <input type={"text"} placeholder="Add a new item" value={plannedOn}
                                        onChange={event => setPlannedOn(event.target.value)}/></div>
                <div>Geplant von: <input type={"text"} placeholder="Add a new item" value={plannedBy}
                                         onChange={event => setPlannedBy(event.target.value)}/></div>
                <div>Veranstaltungsdatum: <input type={"text"} placeholder="Add a new item" value={finalDate}
                                                 onChange={event => setFinalDate(event.target.value)}/></div>
                <div>Bearbeitungsstatus: <input type={"text"} placeholder="Add a new item" value={status}
                                                onChange={event => setStatus(event.target.value)}/></div>
                <div>
                    {membersForWork.map(item => <SingleMember key={item.id} memberForWork={item}/>)}
                </div>
                <div>
                    <div>
                        {dateOptions.map(item => <SingleDateOption key={item.optionName} dateOption={item}/>)}
                    </div>
                    <Button sx={{color: "#F6E27F"}}>+</Button>
                </div>
                <Box
                    sx={{
                        outlineColor: "#F6E27F",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1
                        }
                    }}
                >
                    <ButtonGroup variant="text" aria-label="text button group" sx={{outlineColor: "#F6E27F"}}>
                        <Button sx={{color: "#F6E27F"}} onClick={() => navigate(-1)}>Back</Button>
                        <Button sx={{color: "#F6E27F"}} type={"submit"}>Submit</Button>
                    </ButtonGroup>
                </Box>
            </form>
        </div>
    )
}