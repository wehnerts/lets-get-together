import {ActionItem} from "../../model/ActionItem";
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
                {actionItem.imageName&&
                <img className={"actionimage"} src={actionItem.imageName} alt={"Sorry, no pic! Please set another Picture"}/>}
                <div className={"action-description"}>{actionItem.actionDescription}</div>
                <div className={"homepage"}>{actionItem.homepage}</div>
        </div>
    )
}
