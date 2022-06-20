import React, {FormEvent, useState} from "react";
import {ActionItemDto} from "../dto/ActionItemDto";
import {toast} from "react-toastify";
import './css/NewActionItem.css'
import {useNavigate} from "react-router"
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";


type NewActionItemProps = {
    addNewActionItem: (newItem: ActionItemDto) => void

}

export default function NewActionItem({addNewActionItem}: NewActionItemProps) {
    const [actionTitle, setActionTitle] = useState(``)
    const [actionDescription, setActionDescription] = useState(``)
    const [childFriendly, setChildFriendly] = useState(``)
    const [openingSeason, setOpeningSeason] = useState(``)
    const [openingHours, setOpeningHours] = useState(``)
    const [estDuration, setEstDuration] = useState(``)
    const [price, setPrice] = useState(``)
    const [homepage, setHomepage] = useState(``)
    const [imageName, setImageName] = useState(``)
    const navigate = useNavigate()

    const onAdd = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!actionTitle) {
            toast.error("Name is required");
            return
        }
        const newItem: ActionItemDto = {
            actionTitle: actionTitle,
            actionDescription: actionDescription,
            childFriendly: childFriendly,
            openingSeason: openingSeason,
            openingHours: openingHours,
            estDuration: estDuration,
            price: price,
            homepage: homepage,
            imageName: imageName
        }

        addNewActionItem(newItem);
        navigate(-1)
    }

    return (
        <div className={"new-action-item-details"}>
            <form id="newActionItem" onSubmit={onAdd}>
                <p className={"textOnPages"}>Neue Action anlegen</p>
                <div className={"textOnPages"}>Titel: <br/><input className={"writeInput"} type={"text"}
                                                                  placeholder="Add a new item" value={actionTitle}
                                                                  onChange={event => setActionTitle(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Beschreibung: <br/><textarea className={"writeInput"}
                                                                            placeholder="Add a new item"
                                                                            value={actionDescription}
                                                                            onChange={event => setActionDescription(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Geeignet für Kinder: <br/> <input className={"writeInput"} type={"text"}
                                                                                 placeholder="Add a new item"
                                                                                 value={childFriendly}
                                                                                 onChange={event => setChildFriendly(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Saison: <br/> <input className={"writeInput"} type={"text"}
                                                                    placeholder="Add a new item" value={openingSeason}
                                                                    onChange={event => setOpeningSeason(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Öffnungszeiten:<br/> <input className={"writeInput"} type={"text"}
                                                                           placeholder="Add a new item"
                                                                           value={openingHours}
                                                                           onChange={event => setOpeningHours(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Dauer: <br/><input className={"writeInput"} type={"text"}
                                                                  placeholder="Add a new item" value={estDuration}
                                                                  onChange={event => setEstDuration(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Preis: <br/><input className={"writeInput"} type={"text"}
                                                                  placeholder="Add a new item" value={price}
                                                                  onChange={event => setPrice(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Homepage: <br/><input className={"writeInput"} type={"text"}
                                                                     placeholder="Add a new item" value={homepage}
                                                                     onChange={event => setHomepage(event.target.value)}/>
                </div>
                <div className={"textOnPages"}>Image URI: <br/><input className={"writeInput"} type={"text"}
                                                                      placeholder="Add a picture URI" value={imageName}
                                                                      onChange={event => setImageName(event.target.value)}/>
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


