package de.wehnerts.backend.service;

import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.repository.ActionItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActionItemService {
    private final ActionItemRepo actionItemRepo;

    @Autowired
    public ActionItemService(ActionItemRepo actionItemRepo) {
        this.actionItemRepo = actionItemRepo;
    }
    public List<ActionItem> getActionItems(){return actionItemRepo.findAll();
    }
}
