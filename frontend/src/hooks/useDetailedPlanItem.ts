import {useContext, useState} from "react";
import {toast} from "react-toastify";
import {PlanItem} from "../model/PlanItem";
import {getPlanItemBy} from "../services/api-service-plan";
import {AuthContext} from "../context/AuthProvider";

export default function useDetailedPlanItem() {
    const [detailedPlanItem, setDetailedPlanItem] = useState<PlanItem>()
    const {token} = useContext(AuthContext);

    const getPlanItemById = (id: string) => {
        getPlanItemBy(id, token)
            .then(data => setDetailedPlanItem(data))
            .catch((error) => toast.error(error))
    }

    return {detailedPlanItem, getPlanItemById, setDetailedPlanItem}
}