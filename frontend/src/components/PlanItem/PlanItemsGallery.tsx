import {PlanItem} from "../../model/PlanItem";
import PlanItemCard from "./PlanItemCard";
import {ActionItem} from "../../model/ActionItem";
import '../css/PlanItemGallery.css'

type PlanItemsGalleryProps = {
    planItems: PlanItem[]
    actionItems: ActionItem[]
}

export default function PlanItemsGallery({planItems, actionItems}: PlanItemsGalleryProps) {
    return (
        <div className={"gallery"}>
            <div className={"content"}>

                {planItems.map(item => <PlanItemCard actionItems={actionItems} key={item.id} planItem={item}/>)}

            </div>
        </div>
    )
}