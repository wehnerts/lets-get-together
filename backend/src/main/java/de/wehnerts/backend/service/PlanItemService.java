package de.wehnerts.backend.service;

import de.wehnerts.backend.dto.NewPlanItemDto;
import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.mapper.PlanItemMapper;
import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.ActionItemRepo;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class PlanItemService {
    private final PlanItemRepo planItemRepo;
    private final ActionItemRepo actionItemRepo;
    private final PlanItemMapper planItemMapper;

    @Autowired
    public PlanItemService(PlanItemRepo planItemRepo, ActionItemRepo actionItemRepo, PlanItemMapper planItemMapper) {
        this.actionItemRepo = actionItemRepo;
        this.planItemRepo = planItemRepo;
        this.planItemMapper = planItemMapper;
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

    public PlanItemDto getPlanItemById(String id) {
       PlanItem planItem = planItemRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Fehler!"));

        String actionItemName = getActionItemNameById(planItem.getActionItemId());
        return planItemMapper.mapToDto(planItem, actionItemName);

    }



    private String getActionItemNameById(String id) {
        Optional<ActionItem>optionalActionItem = actionItemRepo.findById(id);
        return optionalActionItem.isPresent() ?
               optionalActionItem.get().getActionTitle() : "Ups! ActionItem is lost!";
    }

    public PlanItemDto addPlanItem(NewPlanItemDto newPlanItemDto) {

        PlanItem newPlanItem = planItemMapper.mapToEntity(newPlanItemDto);
        PlanItem persistedPlanItem = planItemRepo.insert(newPlanItem);

        String actionItemName = getActionItemNameById(persistedPlanItem.getActionItemId());

        return planItemMapper.mapToDto(persistedPlanItem, actionItemName);


    }




    public void deletePlanById(String id) {
        planItemRepo.deleteById(id);
    }

    public PlanItem updatePlanItem(PlanItem changedPlanItem) {
        return planItemRepo.save(changedPlanItem);
    }
}