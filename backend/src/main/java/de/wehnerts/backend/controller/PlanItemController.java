package de.wehnerts.backend.controller;

import de.wehnerts.backend.dto.NewPlanItemDto;
import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.service.PlanItemService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/planitems")
public class PlanItemController {
    private final PlanItemService planItemService;

    public PlanItemController(PlanItemService planItemService) {
        this.planItemService = planItemService;
    }

    @GetMapping
    public List<PlanItemDto> getPlanItems(){return planItemService.getPlanItems();
    }

    @GetMapping("{id}")
    public PlanItemDto getPlanItemById(@PathVariable String id){
        return planItemService.getPlanItemById(id);
    }

    @PostMapping
    public PlanItemDto addPlanItem(@RequestBody NewPlanItemDto newPlanItem){
          return planItemService.addPlanItem(newPlanItem);
    }

    @DeleteMapping("{id}")
    public void deletePlanItemById(@PathVariable String id){
        planItemService.deletePlanById(id);
    }

    @PutMapping PlanItemDto updatePlanItem(@RequestBody PlanItemDto changedPlanItem){
          return planItemService.updatePlanItem(changedPlanItem);
    }
}
