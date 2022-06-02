
import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function MainPage(){
    return(
        <div>

        <div className={"navi-buttons"}>
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
                    <Button sx={{color: "#F6E27F"}} >Actions</Button>
                    <Button sx={{color: "#F6E27F"}}>Plans</Button>
                    <Button sx={{color: "#F6E27F"}}>Delete</Button>
                </ButtonGroup>
            </Box>
        </div>
        </div>
    )
}







