import {useNavigate, useParams} from "react-router";
import React, {useEffect} from "react";
import "./ActionItemDetailPage.css"
import useDetailedPlanItem from "../hooks/useDetailedPlanItem";
import PlanItemDisplayDetails from "../components/PlanItem/PlanItemDisplayDetails";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function PlanItemDetailPage(){
    const {id} = useParams()
    const {detailedPlanItem, getPlanItemById} = useDetailedPlanItem()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getPlanItemById(id)
        }
        // eslint-disable-next-line
    }, [id])

   return(
       <div>
           {detailedPlanItem && <PlanItemDisplayDetails detailedPlanItem={detailedPlanItem}/>}

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
                   <Button sx={{color: "#F6E27F"}} onClick={()=>navigate(-1)}>Delete</Button>
                   <Button sx={{color: "#F6E27F"}} onClick={()=>navigate(-1)}>Submit</Button>
                   <Button sx={{color: "#F6E27F"}} onClick={()=>navigate(-1)}>Edit</Button>

               </ButtonGroup>
           </Box>
       </div>
   )
}
