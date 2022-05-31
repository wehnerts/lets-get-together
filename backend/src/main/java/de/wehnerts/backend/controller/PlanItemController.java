package de.wehnerts.backend.controller;

import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.service.PlanItemService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/planitem")
public class PlanItemController {
    private final PlanItemService planItemService;

    public PlanItemController(PlanItemService planItemService) {
        this.planItemService = planItemService;
    }
    @GetMapping
    public List<PlanItemDto> getPlanItems(){return planItemService.getPlanItems();
    }

}
