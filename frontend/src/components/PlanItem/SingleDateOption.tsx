import React from "react";
import {DateOption} from "../../model/DateOption";
import {Input} from "@mui/material";

type DateOptionProps = {
    dateOption:DateOption
}

export function SingleDateOption(dateOption:DateOptionProps){

    return(
        <div>
            Option&nbsp;{dateOption.dateOption.optionName}: <br/>
            <Input sx={{color: "#F6E27F", fontSize:"small"}} type= {"date"} onChange={event => dateOption.dateOption.optionDate=(event.target.value)}/>
            <br/><br/>
        </div>
    )
}


