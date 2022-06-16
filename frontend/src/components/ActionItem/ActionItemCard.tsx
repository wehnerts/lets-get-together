import {ActionItem} from "../../model/ActionItem";
import '../css/ActionItemCard.css';
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
                <img className={"actionimage"} src={actionItem.imageName} alt={""} />}
                <div className={"action-title"}>{actionItem.actionDescription}</div>
                <div className={"action-title"}>{actionItem.homepage}</div>

        </div>
    )
}
