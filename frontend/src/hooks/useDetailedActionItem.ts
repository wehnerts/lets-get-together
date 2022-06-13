import {useContext, useState} from "react";
import {ActionItem} from "../model/ActionItem";
import {toast} from "react-toastify";
import {getActionItemBy} from "../services/api-service-action";
import {AuthContext} from "../context/AuthProvider";

export default function useDetailedActionItem() {
    const [detailedActionItem, setDetailedActionItem] = useState<ActionItem>()
    const {token} = useContext(AuthContext);

    const getActionItemById = (id: string) => {
        getActionItemBy(id, token)
            .then(data => setDetailedActionItem(data))
            .catch((error) => toast.error(error))
    }

    return {detailedActionItem, getActionItemById, setDetailedActionItem}
}