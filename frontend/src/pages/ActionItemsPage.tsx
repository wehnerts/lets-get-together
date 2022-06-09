import {useNavigate} from "react-router"
import ActionItemsGallery from "../components/ActionItem/ActionItemsGallery";
import React from "react";
import {ActionItem} from "../model/ActionItem";
import './ActionItemsPage.css'
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

type NewActionItemProps={
    actionItems: ActionItem[]
}

const ActionItemsPage=({actionItems}:NewActionItemProps)=>{
    const navigate = useNavigate()

    return(
        <div>
            <div className={"gallery"}>
            <ActionItemsGallery actionItems={actionItems}/>
            </div>
            <Box
                sx={{
                    outlineColor:"#F6E27F",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1
                    }
                }}
            >
                <ButtonGroup  variant="text" aria-label="text button group" sx={{outlineColor: "#F6E27F"}}>
                    <Button sx={{color: "#F6E27F"}} onClick={()=>navigate(-1)}>Back</Button>
                    <Button sx={{color: "#F6E27F"}} onClick={() => navigate("/new-action")}>New Action</Button>
                </ButtonGroup>
            </Box>
        </div>
    )
};
export default ActionItemsPage;