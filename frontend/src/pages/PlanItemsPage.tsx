import React from "react";
import {useNavigate} from "react-router";
import PlanItemsGallery from "../components/PlanItem/PlanItemsGallery";
import {PlanItem} from "../model/PlanItem";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


type PlanItemProps={
    planItems: PlanItem[]
}
const PlanItemsPage=({planItems}:PlanItemProps)=>{
    const navigate = useNavigate()

    return(
        <div>
            <div className={"gallery"}>
                <PlanItemsGallery planItems={planItems}/>
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

                </ButtonGroup>
            </Box>

        </div>
    )
};
export default PlanItemsPage;