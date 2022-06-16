import {PlanItem} from "../../model/PlanItem";
import PlanItemCard from "./PlanItemCard";
import {ActionItem} from "../../model/ActionItem";
import '../css/PlanItemGallery.css'

type PlanItemsGalleryProps = {
    planItems: PlanItem[]
    achtionItems:ActionItem[]
}

export default function PlanItemsGallery({planItems, achtionItems}:PlanItemsGalleryProps){
    return(
        <div className={"gallery"}>
            <div className={"content"}>
                {planItems.map(item => <PlanItemCard actionItems={achtionItems} key={item.id} planItem={item}/>)}
            </div>
        </div>
    )
}