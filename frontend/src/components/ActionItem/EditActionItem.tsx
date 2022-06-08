import React, {FormEvent,  useState} from "react";
import {toast} from "react-toastify";
import './NewActionItem.css'
import {ActionItem} from "../../model/ActionItem";

type EditActionItemProps ={
    item:ActionItem
    editActionItem: (editedActionItem:ActionItem)=>void
}

export default function EditActionItem({item, editActionItem}:EditActionItemProps) {
   const [actionTitle, setActionTitle] = useState<string>(item.actionTitle)
   const [actionDescription, setActionDescription] = useState(item.actionDescription)
   const [childFriendly, setChildFriendly] = useState(item.childFriendly)
   const [openingSeason, setOpeningSeason] = useState(item.openingSeason)
   const [openingHours, setOpeningHours] = useState(item.openingHours)
   const [estDuration, setEstDuration] = useState(item.estDuration)
   const [price, setPrice] = useState(item.price)
   const [homepage, setHomepage] = useState(item.homepage)
   const [id] = useState(item.id)
   const [imageName] = useState(item.imageName)


   const onEdit= (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!actionTitle) {
            toast.error("Name is required")
            return
        }

       const editItem : ActionItem = {
            id:id,
            actionTitle: actionTitle,
            imageName: imageName,
            actionDescription: actionDescription,
            childFriendly: childFriendly,
            openingSeason:openingSeason,
            openingHours:openingHours,
            estDuration:estDuration,
            price:price,
            homepage:homepage,
       }
       editActionItem(editItem)
    }

    return (
        <div className={"new-action-item-details"}>
            <form id="editActionItem" onSubmit={onEdit}>
                <div>Action with id "{id}" ready for edit</div>
                <div>Titel: <input type={"text"} placeholder="Add a new item" value={actionTitle} onChange={event => setActionTitle(event.target.value)} /></div>
                <div>Beschreibung: <input type={"text"} placeholder="Add a new item" value={actionDescription} onChange={event => setActionDescription(event.target.value)} /></div>
                <div>Geeignet für Kinder:  <input type={"text"} placeholder="Add a new item" value={childFriendly} onChange={event => setChildFriendly(event.target.value)} /></div>
                <div>Saison:  <input type={"text"} placeholder="Add a new item" value={openingSeason} onChange={event => setOpeningSeason(event.target.value)} /></div>
                <div>Öffnungszeiten: <input type={"text"} placeholder="Add a new item" value={openingHours} onChange={event => setOpeningHours(event.target.value)} /></div>
                <div>Dauer: <input type={"text"} placeholder="Add a new item" value={estDuration} onChange={event => setEstDuration(event.target.value)} /></div>
                <div>Preis: <input type={"text"} placeholder="Add a new item" value={price} onChange={event => setPrice(event.target.value)} /></div>
                <div>Homepage: <input type={"text"} placeholder="Add a new item" value={homepage} onChange={event => setHomepage(event.target.value)} /></div>
            </form>
        </div>
    )
}


