package de.wehnerts.backend.service;

import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.ActionItemRepo;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


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
                        .actionItemName(actionItemRepo.findById(planItem.getActionItemId()).isPresent() ?
                                actionItemRepo.findById(planItem.getActionItemId()).get().getActionTitle() : "Ups! ActionItem is lost!")
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
}