package de.wehnerts.backend.controller;

import de.wehnerts.backend.dto.NewActionItemDto;
import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.service.ActionItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/actionitem")
public class ActionItemController {
    private final ActionItemService actionItemService;

    public ActionItemController(ActionItemService actionItemService) {
        this.actionItemService = actionItemService;
    }

    @GetMapping
    public List<ActionItem> getActionItems(){return actionItemService.getActionItems();
    }

    @GetMapping ("{id}")
    public ActionItem getActionItemById(@PathVariable String id){
        return actionItemService.getActionItemById(id);
    }

    @PostMapping
    public ActionItem addNewActionItem(@RequestBody NewActionItemDto newActionItemDto){
        return actionItemService.addNewActionItem(newActionItemDto);
    }

    @DeleteMapping ("{id}")
    public void deleteActionitemById(@PathVariable String id){
        actionItemService.deleteActionitemById(id);
    }
}
