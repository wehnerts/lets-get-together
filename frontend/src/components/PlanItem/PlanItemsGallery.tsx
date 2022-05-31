import {PlanItem} from "../../model/PlanItem";
import PlanItemCard from "./PlanItemCard";


type PlanItemsGalleryProps = {
    planItems: PlanItem[]
}

export default function PlanItemsGallery({planItems}:PlanItemsGalleryProps){
    return(
        <div className={"gallery"}>
            <div className={"content"}>
                {planItems.map(item => <PlanItemCard key={item.id} planItem={item}/>)}
            </div>
        </div>
    )
}