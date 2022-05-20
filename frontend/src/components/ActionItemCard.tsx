import {ActionItem} from "../model/ActionItem";
import './ActionItemCard.css';

type ActionItemcardProps = {
    actionItem:ActionItem;
}

export default function ActionItemCard({actionItem}:ActionItemcardProps){
    return(
        <div className={"action-item-card"}>

                <div className={"action-title"}>{actionItem.actionTitle}</div>
                <div className={"action-description"}>{actionItem.actionDescription}</div>
                <div className={"homepage"}>{actionItem.homepage}</div>

        </div>
    )

}
