package de.wehnerts.backend.service;

import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.repository.ActionItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ActionItemService {
    private final ActionItemRepo actionItemRepo;

    @Autowired
    public ActionItemService(ActionItemRepo actionItemRepo) {
        this.actionItemRepo = actionItemRepo;
    }
    public List<ActionItem> getActionItems(){return actionItemRepo.findAll();
    }

    public ActionItem getActionItemById(String id) {
        return actionItemRepo.findById(id)
                .orElseThrow(()->new NoSuchElementException("Action item with "+ id +" not found."));
    }
}
