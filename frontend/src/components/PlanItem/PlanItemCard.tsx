import {PlanItem} from "../../model/PlanItem";
import {useNavigate} from "react-router";
import './PlanItemCard.css'

type PlanItemCardProps ={
    planItem:PlanItem
}

export default function PlanItemCard({planItem}:PlanItemCardProps){
    const navigate = useNavigate()

    return(
        <div className={"plan-item-card"} onClick={()=>navigate(`/planitem/${planItem.id}`)}>
            <div className={"plan-title"}>{planItem.actionItemName}</div>
            <div className={"plan-title"}>{planItem.planDescription}</div>
            <div className={"plan-title"}>{planItem.plannedBy}</div>
            <div className={"plan-title"}>{planItem.plannedOn}</div>
        </div>
    )
}
