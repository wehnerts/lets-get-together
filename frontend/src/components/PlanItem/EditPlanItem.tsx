import React, {FormEvent, useState} from "react";
import {PlanItem} from "../../model/PlanItem";
import {toast} from "react-toastify";
import '../css/EditPlanItem.css'

type EditPlanItemProps = {
    item: PlanItem
    editPlanItem: (editedPlanItem: PlanItem) => void
}

export default function EditPlanItem({item, editPlanItem}: EditPlanItemProps) {
    const [id] = useState(item.id)
    const [actionItemId] = useState(item.actionItemId)
    const [actionItemName] = useState(item.actionItemName)
    const [planDescription, setPlanDescription] = useState<string>(item.planDescription)
    const [plannedOn, setPlannedOn] = useState<string>(item.plannedOn)
    const [plannedBy, setPlannedBy] = useState<string>(item.plannedBy)
    const [finalDate, setFinalDate] = useState<string>(item.finalDate)
    const [status] = useState<string>(item.status)
    const [dateOptions] = useState(item.dateOptions)
    const [finalGang] = useState(item.finalGang)

    const onEdit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const editItem: PlanItem = {
            id: id,
            actionItemId: actionItemId,
            actionItemName: actionItemName,
            planDescription: planDescription,
            plannedOn: plannedOn,
            plannedBy: plannedBy,
            finalGang: finalGang,
            dateOptions: dateOptions,
            finalDate: finalDate,
            status: status
        }
        editPlanItem(editItem)
        toast.info("Action löppt")
    }
    return (
        <div className={"edit-planItem"}>
            <form id="editPlanItem" onSubmit={onEdit}>
                <p className={"textOnPages"}>Eigenschaften des Planes ändern</p>
                <div className={"textOnPages"}>Beschreibung:<br/> <textarea className={"writeInput"}
                                                                            placeholder={planDescription}
                                                                            value={planDescription}
                                                                            onChange={event => setPlanDescription(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Geplant am:<br/> <input className={"writeInput"} type={"text"}
                                                                       placeholder={plannedOn}
                                                                       value={plannedOn}
                                                                       onChange={event => setPlannedOn(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Geplant von: <br/> <input className={"writeInput"} type={"text"}
                                                                         placeholder={plannedBy}
                                                                         value={plannedBy}
                                                                         onChange={event => setPlannedBy(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Veranstaltungsdatum: <br/> <input className={"writeInput"} type={"text"}
                                                                                 placeholder={finalDate}
                                                                                 value={finalDate}
                                                                                 onChange={event => setFinalDate(event.target.value)}/>
                </div>

            </form>
        </div>
    )
}