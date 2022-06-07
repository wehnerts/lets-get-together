package de.wehnerts.backend.mapper;

import de.wehnerts.backend.dto.NewPlanItemDto;
import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.model.PlanItem;
import org.springframework.stereotype.Service;

@Service
public class PlanItemMapper {
    public PlanItem mapToEntity(NewPlanItemDto planItemDto) {
        return PlanItem.builder()
                .actionItemId(planItemDto.getActionItemId())
                .planDescription(planItemDto.getPlanDescription())
                .plannedOn(planItemDto.getPlannedOn())
                .plannedBy(planItemDto.getPlannedBy())
                .finalGang(planItemDto.getFinalGang())
                .dateOptions(planItemDto.getDateOptions())
                .finalDate(planItemDto.getFinalDate())
                .status(planItemDto.getStatus())
                .build();
    }

    public PlanItemDto mapToDto(PlanItem planItem, String actionItemName) {
        return PlanItemDto.builder()
                .id(planItem.getId())
                .actionItemId(planItem.getActionItemId())
                .actionItemName(actionItemName)
                .planDescription(planItem.getPlanDescription())
                .plannedOn(planItem.getPlannedOn())
                .plannedBy(planItem.getPlannedBy())
                .finalGang(planItem.getFinalGang())//TODO: Member Work Item DTO erstellen
                .dateOptions(planItem.getDateOptions())
                .finalDate(planItem.getFinalDate())
                .status(planItem.getStatus())
                .build();
    }


}
