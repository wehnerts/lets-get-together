import {MemberForWork} from "../model/MemberForWork";
import {DateOption} from "../model/DateOption";

export type PlanItemDto = {

    actionItemId: string;
    planDescription: string;
    plannedOn: string;
    plannedBy: string;
    finalGang: MemberForWork[];
    dateOptions: DateOption[];
    finalDate: string;
    status: string;
}