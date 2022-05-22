import {ActionItem} from "../model/ActionItem";
import ActionItemCard from "./ActionItemCard";
import './ActionItemGallery.css'

type ActionItemGalleryProps = {
    actionItems: ActionItem[]
}

export default function ActionItemsGallery({actionItems}:ActionItemGalleryProps){
    return(
        <div>
            <p>Hallo Welt</p>
            <div className={"content"}>
                {actionItems.map(item => <ActionItemCard key={item.id} actionItem={item}/>)}
            </div>
        </div>
    )
}