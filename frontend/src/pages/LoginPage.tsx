import * as React from 'react';
import {FormEvent, useContext, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import {Button, Input} from "@mui/material";


export default function LoginPage() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const {login} = useContext(AuthContext)

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        login({username: username, password: password})
    }

    return (
        <div>

            <div className={"navi-buttons"}>

                <form onSubmit={onSubmit}>
                    <Input sx={{color: "#F6E27F"}} type={"text"} value={username} placeholder={"Username"}
                           onChange={(event) => setUsername(event.target.value)}/><br/>
                    <Input sx={{color: "#F6E27F"}} type={"password"} value={password} placeholder={"Password"}
                           onChange={(event) => setPassword(event.target.value)}/><br/>
                    <Button sx={{color: "#F6E27F"}} type={"submit"}>Login</Button>
                </form>

            </div>
        </div>
    )
}