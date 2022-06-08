import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import "./ActionItemDetailPage.css"
import ActionItemDisplayDetails from "../components/ActionItem/ActionItemDisplayDetails";
import useDetailedActionItem from "../hooks/useDetailedActionItem";
import EditActionItem from "../components/ActionItem/EditActionItem";
import {ActionItem} from "../model/ActionItem";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";


type ActionItemDetailProps = {
    deleteActionItem: (id:string)=>void
    editActionItem: (editItem:ActionItem)=>Promise<ActionItem|void>
}
export default function ActionItemDetailPage({deleteActionItem, editActionItem}:ActionItemDetailProps){
    const {id} = useParams()
    const {detailedActionItem, getActionItemById} = useDetailedActionItem()
    const navigate = useNavigate()
    const [editingEnabled, setEditingEnabled] = useState<boolean>(false);
    useEffect(() => {
        if (id) {
            getActionItemById(id)
        }
        // eslint-disable-next-line
    }, [id])

    const toggleEdit = () => {
        setEditingEnabled(!editingEnabled);
    }


   return(
       <div>
           {detailedActionItem&&
           <div>
               {editingEnabled
                   ? <EditActionItem editActionItem={editActionItem} item={detailedActionItem}/>
                   : <ActionItemDisplayDetails detailedActionItem={detailedActionItem}/>}
           </div>}

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
                   <Button sx={{color: "#F6E27F"}} onClick={() => navigate(-1)}>Back</Button>
                   {editingEnabled ? detailedActionItem&&
                   <Button sx={{color: "#F6E27F"}} onClick={() => deleteActionItem(detailedActionItem.id)} >Delete Item</Button>:<Button sx={{color: "#F6E27F"}} disabled={true}>Delete Item</Button>}
                   {editingEnabled ? <Button sx={{color: "#F6E27F"}} type={"submit"} form={"editActionItem"}>Submit</Button>:<Button disabled={true}  sx={{color: "#F6E27F"}} onClick={toggleEdit}>Submit</Button>}
                   <Button sx={{color: "#F6E27F"}} onClick={toggleEdit}>{editingEnabled?"cancel":"Edit"}</Button>
                   <Button sx={{color: "#F6E27F"}} onClick={() => { navigate(`/new-plan/${id}`)}}>New Plan</Button>
               </ButtonGroup>
           </Box>
       </div>

   )
}
