import React, {FormEvent, useState} from "react";
import {PlanItem} from "../../model/PlanItem";
import {toast} from "react-toastify";

type EditPlanItemProps = {
    item:PlanItem
    editPlanItem: (editedPlanItem:PlanItem)=>void
}

export default function EditPlanItem({item, editPlanItem}:EditPlanItemProps){
    const [id] = useState(item.id)
    const [actionItemId] = useState(item.actionItemId)
    const [actionItemName] = useState(item.actionItemName)
    const [planDescription, setPlanDescription] = useState<string>(item.planDescription)
    const [plannedOn, setPlannedOn] = useState<string>(item.plannedOn)
    const [plannedBy, setPlannedBy] = useState<string>(item.plannedBy)
    const [finalDate, setFinalDate] = useState<string>(item.finalDate)
    const [status, setStatus] = useState<string>(item.status)
    const [dateOptions] = useState(item.dateOptions)
    const [finalGang] = useState(item.finalGang)

    const onEdit=(event: FormEvent<HTMLFormElement>)=>{
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


    return(
        <div>
            <form id="editPlanItem" onSubmit={onEdit}>
            <div>Eigenschaften des Planes ändern </div>
            <div>Beschreibung: <input type={"text"} placeholder={planDescription} value={planDescription}
                                      onChange={event => setPlanDescription(event.target.value)}/></div>
            <div>Geplant am: <input type={"text"} placeholder={plannedOn} value={plannedOn}
                                    onChange={event => setPlannedOn(event.target.value)}/></div>
            <div>Geplant von: <input type={"text"} placeholder={plannedBy} value={plannedBy}
                                     onChange={event => setPlannedBy(event.target.value)}/></div>
            <div>Veranstaltungsdatum: <input type={"text"} placeholder={finalDate} value={finalDate}
                                             onChange={event => setFinalDate(event.target.value)}/></div>
            <div>Bearbeitungsstatus: <input type={"text"} placeholder="Add a new item" value={status}
                                            onChange={event => setStatus(event.target.value)}/></div>
            </form>
        </div>
    )
}