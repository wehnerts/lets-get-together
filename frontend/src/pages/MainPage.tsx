import {useNavigate} from "react-router"
import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function MainPage() {

    const navigate = useNavigate()
    return (
        <div>

            <div className={"navi-buttons"}>
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
                        <Button sx={{color: "#F6E27F"}} onClick={() => navigate("/actions")}>Actions</Button>
                        <Button sx={{color: "#F6E27F"}} onClick={() => navigate("/plans")}>Plans</Button>
                    </ButtonGroup>
                </Box>
            </div>
        </div>
    )
}







