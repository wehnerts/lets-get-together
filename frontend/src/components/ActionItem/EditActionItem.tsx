import React, {FormEvent,  useState} from "react";
import {toast} from "react-toastify";
import '../css/EditActionItem.css'
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
   const [imageName,setImageName] = useState(item.imageName)


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
        <div className={"edit-action-item-details"}>
            <form id="editActionItem" onSubmit={onEdit}>
                <p className={"textOnPages"}>Edit action: ({id})</p>
                <div className={"textOnPages"}>Titel:<br/> <input className={"writeInput"} type={"text"} placeholder="Add a new item" value={actionTitle} onChange={event => setActionTitle(event.target.value)} /></div>
                <div className={"textOnPages"}>Beschreibung:<br/> <textarea className={"writeInput"} placeholder="Add a new item" value={actionDescription} onChange={event => setActionDescription(event.target.value)}/></div>
                <div className={"textOnPages"}>Geeignet f??r Kinder:<br/>  <input className={"writeInput"} type={"text"} placeholder="Add a new item" value={childFriendly} onChange={event => setChildFriendly(event.target.value)} /></div>
                <div className={"textOnPages"}>Saison: <br/> <input className={"writeInput"} type={"text"} placeholder="Add a new item" value={openingSeason} onChange={event => setOpeningSeason(event.target.value)} /></div>
                <div className={"textOnPages"}>??ffnungszeiten:<br/><input  className={"writeInput"}  type={"text"} placeholder="Add a new item" value={openingHours} onChange={event => setOpeningHours(event.target.value)} /></div>
                <div className={"textOnPages"}>Dauer:<br/> <input className={"writeInput"} type={"text"} placeholder="Add a new item" value={estDuration} onChange={event => setEstDuration(event.target.value)} /></div>
                <div className={"textOnPages"}>Preis:<br/> <input className={"writeInput"} type={"text"} placeholder="Add a new item" value={price} onChange={event => setPrice(event.target.value)} /></div>
                <div className={"textOnPages"}>Homepage:<br/> <input className={"writeInput"} type={"text"} placeholder="Add a new item" value={homepage} onChange={event => setHomepage(event.target.value)} /></div>
                <div className={"textOnPages"}>Bild URL:<br/> <input className={"writeInput"} type={"text"} placeholder="Add a new item" value={imageName} onChange={event => setImageName(event.target.value)} /></div>
            <br/>
            </form>
        </div>
    )
}


