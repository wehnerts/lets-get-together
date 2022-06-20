import Rating, {IconContainerProps} from "@mui/material/Rating";
import * as React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import {MemberForWork} from "../../model/MemberForWork";
import {PlanItem} from "../../model/PlanItem";
import {useEffect, useState} from "react";
import "../css/UserVote.css"
import Button from "@mui/material/Button";
import useMembers from "../../hooks/useMembers";
import {EditedVoteUserDto} from "../../dto/EditedVoteUserDto";


type votingProps = {
    member: MemberForWork
    planItem: PlanItem
    optName: string
}
export default function UserVote({member, planItem, optName}: votingProps) {

    const {editMemberItem} = useMembers()
    const [opti1, setOpt1] = useState(Number(member.opt1))
    const [opti2, setOpt2] = useState(Number(member.opt2))
    const [opti3, setOpt3] = useState(Number(member.opt3))
    const [date1, setDate1] = useState("")
    const [date2, setDate2] = useState("")
    const [date3, setDate3] = useState("")

    useEffect(() => {
        const dates: string[] = planItem.dateOptions.filter(item => item.optionDate).map(item => item.optionDate)
        setDate1(dates[0])
        setDate2(dates[1])
        setDate3(dates[2])

        // eslint-disable-next-line
    }, [])

    const customIcons: {
        [index: string]: {
            icon: React.ReactElement;
            label: string;
        };
    } = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon/>,
            label: 'Very Dissatisfied',
        },
        2: {
            icon: <SentimentSatisfiedIcon/>,
            label: 'Neutral',
        },
        3: {
            icon: <SentimentVerySatisfiedIcon/>,
            label: 'Very Satisfied',
        },
        4: {
            icon: <SentimentSatisfiedAltIcon/>,
            label: 'Satisfied',
        },
        5: {
            icon: <SentimentVerySatisfiedIcon/>,
            label: 'Very Satisfied',
        },
    };

    function IconContainer(props: IconContainerProps) {
        const {value, ...other} = props;
        return <span {...other}>{customIcons[value].icon}</span>;
    }

    const submitVote = () => {
        member.opt1 = Number(opti1).toString()
        member.opt2 = Number(opti2).toString()
        member.opt3 = Number(opti3).toString()

        const memberEdited: EditedVoteUserDto = {
            planId: planItem.id,
            userId: member.id,
            username: member.username,
            isPlanned: member.isPlanned,
            opt1: member.opt1,
            opt2: member.opt2,
            opt3: member.opt3
        }
        editMemberItem(memberEdited)
    }

    return (

        <div>
            {(optName === "1" || optName === "2" || optName === "3") &&
                <div>
                    <div className={"option"}>Option 1:<br/> {date1}</div>
                    <div className={"vote"}>

                        <div>
                            <Rating
                                size='small'
                                name="highlight-selected-only"
                                max={3}
                                defaultValue={Number(member.opt1)}
                                IconContainerComponent={IconContainer}
                                highlightSelectedOnly
                                onChange={(_event, value) => {
                                    value && setOpt1(value)
                                }}

                                sx={{
                                    "& .MuiRating-iconFilled": {
                                        color: "#F6E27F"
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>}

            {(optName === "2" || optName === "3") &&
                <div>
                    <div>Option 2:<br/>{date2}</div>
                    <div className={"vote"}>

                        <div>
                            <Rating
                                size="small"
                                name="highlight-selected-only"
                                max={3}
                                defaultValue={Number(member.opt2)}
                                IconContainerComponent={IconContainer}
                                highlightSelectedOnly
                                onChange={(_event, value) => {
                                    value && setOpt2(value)
                                }}
                                sx={{
                                    "& .MuiRating-iconFilled": {
                                        color: "#F6E27F"
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>}
            {optName === "3" &&
                <div>
                    <div>Option 3:<br/> {date3}</div>
                    <div className={"vote"}>

                        <div>
                            <Rating
                                size="small"
                                name="highlight-selected-only"
                                max={3}
                                defaultValue={Number(member.opt3)}
                                IconContainerComponent={IconContainer}
                                highlightSelectedOnly
                                onChange={(_event, value) => {
                                    value && setOpt3(value)
                                }}
                                sx={{
                                    "& .MuiRating-iconFilled": {
                                        color: "#F6E27F"
                                    }
                                }}
                            />
                        </div>

                    </div>

                </div>}
            <Button sx={{color: '#f4e07f'}} onClick={submitVote}>Submit</Button>
        </div>)
}