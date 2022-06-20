import {MemberForWork} from "./MemberForWork";
import {DateOption} from "./DateOption";

export type PlanItem = {
    id: string;
    actionItemId: string;
    actionItemName: string;
    planDescription: string;
    plannedOn: string;
    plannedBy: string;
    finalGang: MemberForWork[];
    dateOptions: DateOption[];
    finalDate: string;
    status: string;
}