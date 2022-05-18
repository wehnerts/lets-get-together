package de.wehnerts.backend.controller;

import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.service.ActionItemService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/actionitem")
public class ActionItemController {
    private final ActionItemService actionItemService;

    public ActionItemController(ActionItemService actionItemService) {
        this.actionItemService = actionItemService;
    }

    @GetMapping
    public List<ActionItem> getActionItems(){return actionItemService.getActionItems();}
}
