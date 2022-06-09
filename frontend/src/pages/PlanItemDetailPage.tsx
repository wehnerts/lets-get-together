import {useNavigate, useParams} from "react-router";
import React, { useEffect, useState} from "react";
import "./ActionItemDetailPage.css"
import useDetailedPlanItem from "../hooks/useDetailedPlanItem";
import PlanItemDisplayDetails from "../components/PlanItem/PlanItemDisplayDetails";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EditPlanItem from "../components/PlanItem/EditPlanItem";
import {PlanItem} from "../model/PlanItem";


type PlanItemDetailProps = {
    deletePlanItem: (id: string) => void
    editPlanItem: (editItem: PlanItem) => Promise<PlanItem | void>
}
export default function PlanItemDetailPage({deletePlanItem, editPlanItem}: PlanItemDetailProps) {
    const {id} = useParams()
    const {detailedPlanItem, getPlanItemById} = useDetailedPlanItem()
    const navigate = useNavigate()
    const [editingEnabled, setEditingEnabled] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            getPlanItemById(id)
        }
        // eslint-disable-next-line
    }, [id])

    const toggleEdit = () => {
        setEditingEnabled(!editingEnabled);
    }

    return (
        <div>
            {detailedPlanItem &&
                <div>

                    {editingEnabled ? <EditPlanItem item={detailedPlanItem} editPlanItem={editPlanItem}/>
                        : <PlanItemDisplayDetails detailedPlanItem={detailedPlanItem}/>}

                </div>}
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
                    {editingEnabled ? detailedPlanItem &&
                        <Button sx={{color: "#F6E27F"}}
                                onClick={() => deletePlanItem(detailedPlanItem.id)}>Delete</Button> :
                        <Button sx={{color: "#F6E27F"}} disabled={true}>Delete</Button>}
                    {editingEnabled ?
                        <Button sx={{color: "#F6E27F"}} type={"submit"} form={"editPlanItem"}>Submit</Button> :
                        <Button sx={{color: "#F6E27F"}} disabled={true}>Submit</Button>}
                    <Button sx={{color: "#F6E27F"}} onClick={toggleEdit}>{editingEnabled ? "cancel" : "Edit"}</Button>
                </ButtonGroup>
            </Box>

        </div>
    )
}
