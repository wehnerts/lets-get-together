package de.wehnerts.backend.service;

import de.wehnerts.backend.dto.NewPlanItemDto;
import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.dto.UserVoteDto;
import de.wehnerts.backend.mapper.PlanItemMapper;
import de.wehnerts.backend.model.ActionItem;
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
public class VotingService {
    private final PlanItemRepo planItemRepo;


    @Autowired
    public VotingService(PlanItemRepo planItemRepo) {

        this.planItemRepo = planItemRepo;

    }

    public List<PlanItemDto> getPlanItems() {
        List<PlanItem> planWithoutAction = planItemRepo.findAll();
        List<PlanItemDto> planItemDtos = new ArrayList<>();

        planWithoutAction.forEach(planItem ->
                planItemDtos.add(PlanItemDto.builder()
                        .id(planItem.getId())
                        .actionItemId(planItem.getActionItemId())
                        .actionItemName(planItem.getActionItemId())
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


    public PlanItemDto updatePlanItem(UserVoteDto changedPlanItemDto) {
        //PlanItem changedPlanItem = planItemMapper.mapToEntity(changedPlanItemDto);
        //PlanItem persistedPlanItem = planItemRepo.save(changedPlanItem);
        //String actionItemName = getActionItemNameById(persistedPlanItem.getActionItemId());
        return PlanItemDto.builder()
                .id("4711")
                .build();//planItemMapper.mapToDto(persistedPlanItem, actionItemName);
    }
}