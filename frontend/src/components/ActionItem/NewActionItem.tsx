import React, {FormEvent,  useState} from "react";
import {ActionItemDto} from "../../dto/ActionItemDto";
import {toast} from "react-toastify";
import './NewActionItem.css'
import {useNavigate} from "react-router"


type NewActionItemProps={
    addNewActionItem:(newItem:ActionItemDto)=>void
}

export default function NewActionItem({addNewActionItem}:NewActionItemProps) {
   const [actionTitle, setActionTitle] = useState(``)
   const [actionDescription, setActionDescription] = useState(``)
   const [childFriendly, setChildFriendly] = useState(``)
   const [openingSeason, setOpeningSeason] = useState(``)
   const [openingHours, setOpeningHours] = useState(``)
   const [estDuration, setEstDuration] = useState(``)
   const [price, setPrice] = useState(``)
   const [homepage, setHomepage] = useState(``)
    const navigate = useNavigate()

    const onAdd = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!actionTitle) {
            toast.error("Name is required");
            return
        }
        const newItem : ActionItemDto = {
            actionTitle: actionTitle,
            actionDescription: actionDescription,
            childFriendly: childFriendly,
            openingSeason:openingSeason,
            openingHours:openingHours,
            estDuration:estDuration,
            price:price,
            homepage:homepage,
        }

        addNewActionItem(newItem);
        setActionTitle('')
    }

    return (
        <div className={"new-action-item-details"}>
            <form onSubmit={onAdd}>
                <div>Titel: <input type={"text"} placeholder="Add a new item" value={actionTitle} onChange={event => setActionTitle(event.target.value)} /></div>
                <div>Beschreibung: <input type={"text"} placeholder="Add a new item" value={actionDescription} onChange={event => setActionDescription(event.target.value)} /></div>
                <div>Geeignet für Kinder:  <input type={"text"} placeholder="Add a new item" value={childFriendly} onChange={event => setChildFriendly(event.target.value)} /></div>
                <div>Saison:  <input type={"text"} placeholder="Add a new item" value={openingSeason} onChange={event => setOpeningSeason(event.target.value)} /></div>
                <div>Öffnungszeiten: <input type={"text"} placeholder="Add a new item" value={openingHours} onChange={event => setOpeningHours(event.target.value)} /></div>
                <div>Dauer: <input type={"text"} placeholder="Add a new item" value={estDuration} onChange={event => setEstDuration(event.target.value)} /></div>
                <div>Preis: <input type={"text"} placeholder="Add a new item" value={price} onChange={event => setPrice(event.target.value)} /></div>
                <div>Homepage: <input type={"text"} placeholder="Add a new item" value={homepage} onChange={event => setHomepage(event.target.value)} /></div>
                <button type={"submit"}>Submit</button>
            </form>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}


