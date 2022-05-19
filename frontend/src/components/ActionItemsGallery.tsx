import {ActionItem} from "../model/ActionItem";
import ActionItemCard from "./ActionItemCard";


type ActionItemGalleryProps = {
    actionItems: ActionItem[]
}

export default function ActionItemsGallery({actionItems}:ActionItemGalleryProps){
    return(
        <div>
            {actionItems.map(item => <ActionItemCard key={item.id} actionItem={item}/>)}
        </div>
    )
}