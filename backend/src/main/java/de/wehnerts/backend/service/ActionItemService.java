package de.wehnerts.backend.service;

import de.wehnerts.backend.dto.NewActionItemDto;
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
    public ActionItem addNewActionItem(NewActionItemDto newActionItemDto) {
        ActionItem newActionItem = new ActionItem();
        if(newActionItemDto.getActionTitle()==null){
            throw new IllegalArgumentException("Action Title mustn't be NULL");
        }
        newActionItem.setActionTitle(newActionItemDto.getActionTitle());
        newActionItem.setImageName(newActionItemDto.getImageName());
        newActionItem.setActionDescription(newActionItemDto.getActionDescription());
        newActionItem.setChildFriendly(newActionItemDto.getChildFriendly());
        newActionItem.setOpeningSeason(newActionItemDto.getOpeningSeason());
        newActionItem.setOpeningHours(newActionItemDto.getOpeningHours());
        newActionItem.setEstDuration(newActionItemDto.getEstDuration());
        newActionItem.setPrice(newActionItemDto.getPrice());
        newActionItem.setHomepage(newActionItemDto.getHomepage());

        return actionItemRepo.insert(newActionItem);
    }

    public void deleteActionitemById(String id) {
        actionItemRepo.deleteById(id);
    }
}
