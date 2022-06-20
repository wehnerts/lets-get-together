import {useContext, useEffect, useState} from "react";
import {PlanItem} from "../model/PlanItem";
import {toast} from "react-toastify";
import {getAllPlanItems, postPlanItem, putPlanItem, removePlanItem} from "../services/api-service-plan";
import {PlanItemDto} from "../dto/PlanItemDto";
import {AuthContext} from "../context/AuthProvider";


export default function usePlanItems() {
    const [planItems, setPlanItems] = useState<PlanItem[]>([])
    const {token} = useContext(AuthContext);

    useEffect(() => {
        getAllPlanItems(token)
            .then(allPlanI => setPlanItems(allPlanI))
            .catch(() => toast.error("Connection failed! Please try again later"))
    }, [token])

    const addNewPlanItem = (newPlanItem: PlanItemDto) => {
        postPlanItem(newPlanItem, token)
            .then((addedPlanItem) => setPlanItems([...planItems, addedPlanItem]))
            .then(() => toast.success("Es wurde eine neuer Plan angelegt!"))
            .catch(() => toast.error("Something went wrong!"))
    }
    const deletePlanItem = (id: string) => {
        removePlanItem(id, token)
            .then(() => setPlanItems(planItems.filter(planItem => planItem.id !== id)))
            .then(() => toast.success("PlanItem wurde gelöscht"))
            .catch(() => toast.error("Error while remove ActionItem"))
    }

    const editPlanItem = (editItem: PlanItem) => {
        return putPlanItem(editItem, token)
            .then(editedItem => {
                setPlanItems(planItems.map(item => item.id === editedItem.id ? editedItem : item))
                toast.success("PlanItem" + editedItem.id + " updated")
                return editedItem
            })
            .catch(() => {
                toast.error("Update failed. Please try again later.")
            })
    }
    return {planItems, addNewPlanItem, deletePlanItem, editPlanItem}
}