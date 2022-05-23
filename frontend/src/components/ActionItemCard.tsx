import {ActionItem} from "../model/ActionItem";
import './ActionItemCard.css';
import {useNavigate} from "react-router";

type ActionItemcardProps = {
    actionItem:ActionItem;
}

export default function ActionItemCard({actionItem}:ActionItemcardProps){
    const navigate = useNavigate()
    return(
        <div className={"action-item-card"} onClick={()=>navigate(`/actionitem/${actionItem.id}`)}>

                <div className={"action-title"}>{actionItem.actionTitle}</div>
                <div className={"action-description"}>{actionItem.actionDescription}</div>
                <div className={"homepage"}>{actionItem.homepage}</div>

        </div>
    )

}
