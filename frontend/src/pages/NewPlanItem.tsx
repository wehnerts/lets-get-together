import React, {FormEvent, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router"
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import useDetailedActionItem from "../hooks/useDetailedActionItem";
import './css/NewPlanItem.css'
import {MemberForWork} from "../model/MemberForWork";
import {PlanItemDto} from "../dto/PlanItemDto";
import {DateOption} from "../model/DateOption";
import SingleMember from "../components/PlanItem/SingleMember";
import {SingleDateOption} from "../components/PlanItem/SingleDateOption";
import usePlanItems from "../hooks/usePlanItems";

type NewPlanItemProps = {
    membersForWork: MemberForWork[]

}

export default function NewPlanItem({membersForWork}: NewPlanItemProps) {
    const {actionId} = useParams()
    const navigate = useNavigate()
    const {addNewPlanItem} = usePlanItems()
    const {detailedActionItem, getActionItemById} = useDetailedActionItem()
    const [planDescription, setPlanDescription] = useState<string>('')
    const [plannedOn, setPlannedOn] = useState<string>('')
    const [plannedBy, setPlannedBy] = useState<string>('')
    const [finalDate, setFinalDate] = useState<string>('')
    const [status] = useState<string>('DRAFT')
    const [dateOptions] = useState<DateOption[]>
    ([{optionName: '1', optionDate: ''}, {optionName: '2', optionDate: ''},
        {optionName: '3', optionDate: ''}])

    useEffect(() => {
        if (actionId) {
            getActionItemById(actionId)
        }
        // eslint-disable-next-line
    }, [])

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
            navigate("/plans")
        }
    }
    return (
        <div>
            <div className={"new-plan-item"}>
                {detailedActionItem &&
                    <div className={"plan-action-description"}>
                        <p>Du hast die Aktion "{detailedActionItem.actionTitle}" ausgewählt, um eine Veranstaltung zu
                            planen:
                        </p>
                        <p>Beschreibung:<br/> {detailedActionItem.actionDescription}</p>
                        <p>Für Kinder:<br/> {detailedActionItem.childFriendly}</p>
                        <p>Dauer: <br/>{detailedActionItem.estDuration}</p>
                        <p>Kosten:<br/> {detailedActionItem.price}</p>
                        <p>Homepage:<br/>
                            <a href={detailedActionItem.homepage}> {detailedActionItem.homepage}</a>
                        </p>
                    </div>}
                <br/>
                <form id="newPlanItem" onSubmit={onAdd}>
                    <div>Beschreibung:<br/> <textarea  placeholder="Füge eine Beschreibung hinzu" value={planDescription}
                                                   onChange={event => setPlanDescription(event.target.value)}/></div>
                    <div>Geplant am:<br/> <input type={"text"} placeholder="Add a new item" value={plannedOn}
                                                 onChange={event => setPlannedOn(event.target.value)}/></div>
                    <div>Geplant von:<br/> <input type={"text"} placeholder="Add a new item" value={plannedBy}
                                                  onChange={event => setPlannedBy(event.target.value)}/></div>
                    <div>Veranstaltungsdatum:<br/> <input type={"text"} placeholder="Add a new item" value={finalDate}
                                                          onChange={event => setFinalDate(event.target.value)}/></div>
                    <br/>
                    <div>
                        {membersForWork.map(item => <SingleMember key={item.id} memberForWork={item}/>)}
                    </div>
                    <div>
                        <div>
                            {dateOptions.map(item => <SingleDateOption key={item.optionName} dateOption={item}/>)}
                        </div>

                    </div>

                </form>

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
                    <Button sx={{color: "#F6E27F"}} type={"submit"} form={"newPlanItem"}>Submit</Button>
                </ButtonGroup>
            </Box>
        </div>
    )
}
