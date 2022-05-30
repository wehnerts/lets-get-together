package de.wehnerts.backend.service;

import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanItemService {
    private final PlanItemRepo planItemRepo;

    @Autowired
    public PlanItemService(PlanItemRepo planItemRepo){
        this.planItemRepo=planItemRepo;
    }

    public List<PlanItem> getPlanItems(){
        return planItemRepo.findAll();
    }
}
