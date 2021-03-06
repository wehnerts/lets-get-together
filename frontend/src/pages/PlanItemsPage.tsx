import React from "react";
import {useNavigate} from "react-router";
import PlanItemsGallery from "../components/PlanItem/PlanItemsGallery";
import {PlanItem} from "../model/PlanItem";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {ActionItem} from "../model/ActionItem";
import './css/PlanItemsPage.css'

type PlanItemProps = {
    planItems: PlanItem[]
    actionItems: ActionItem[]
}

const PlanItemsPage = ({planItems, actionItems}: PlanItemProps) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className={"textOnPages"}>Plans:</div>
            <div className={"frameForGallery"}>
                <PlanItemsGallery actionItems={actionItems} planItems={planItems}/>
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
                </ButtonGroup>
            </Box>
        </div>
    )
};
export default PlanItemsPage;