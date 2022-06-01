package de.wehnerts.backend.service;

import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.ActionItemRepo;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class PlanItemService {
    private final PlanItemRepo planItemRepo;
    private final ActionItemRepo actionItemRepo;

    @Autowired
    public PlanItemService(PlanItemRepo planItemRepo, ActionItemRepo actionItemRepo) {
        this.actionItemRepo = actionItemRepo;
        this.planItemRepo = planItemRepo;
    }

    public List<PlanItemDto> getPlanItems() {
        List<PlanItem> planWithoutAction = planItemRepo.findAll();
        List<PlanItemDto> planItemDtos = new ArrayList<>();

        planWithoutAction.forEach(planItem ->
                planItemDtos.add(PlanItemDto.builder()
                        .id(planItem.getId())
                        .actionItemId(planItem.getActionItemId())
                        .actionItemName(getActionItemName(planItem))
                        .planDescription(planItem.getPlanDescription())
                        .plannedOn(planItem.getPlannedOn())
                        .plannedBy(planItem.getPlannedBy())
                        .finalGang(planItem.getFinalGang())
                        .dateOptions(planItem.getDateOptions())
                        .finalDate(planItem.getFinalDate())
                        .status(planItem.getStatus())
                        .build()));
        return planItemDtos;
    }

    private String getActionItemName(PlanItem planItem) {
        Optional<ActionItem>optionalActionItem = actionItemRepo.findById(planItem.getActionItemId());
        return optionalActionItem.isPresent() ?
                optionalActionItem.get().getActionTitle() : "Ups! ActionItem is lost!";
    }
}