package de.wehnerts.backend.service;

import de.wehnerts.backend.dto.NewActionItemDto;
import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.repository.ActionItemRepo;
import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ActionItemServiceTest {

    private final ActionItemRepo actionItemRepo = mock(ActionItemRepo.class);
    private final ActionItemService actionItemService = new ActionItemService(actionItemRepo);

    @Test
    void getActionItems() {
        //Given

        ActionItem item1 = ActionItem.builder()
                .id("1")
                .actionTitle ("Äkschn One")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();
        ActionItem item2 = ActionItem.builder()
                .id("2")
                .actionTitle ("Äkschn Zwo")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();
        when(actionItemRepo.findAll()).thenReturn(List.of(item1, item2));

        //WHEN
        List<ActionItem>actual=actionItemService.getActionItems();

        //THEN
        List<ActionItem>expected=List.of(
                ActionItem.builder()
                    .id("1")
                    .actionTitle ("Äkschn One")
                    .imageName ("")
                    .actionDescription("Der Peter geht ab")
                    .childFriendly ("true")
                    .openingSeason ("Von O bis O")
                    .openingHours ("24/7")
                    .estDuration ("2h")
                    .price ("ne Mark")
                    .homepage("www.de")
                    .build(),

                ActionItem.builder()
                    .id("2")
                    .actionTitle ("Äkschn Zwo")
                    .imageName ("")
                    .actionDescription("Der Peter geht ab")
                    .childFriendly ("true")
                    .openingSeason ("Von O bis O")
                    .openingHours ("24/7")
                    .estDuration ("2h")
                    .price ("ne Mark")
                    .homepage("www.de")
                    .build()
                );
        verify(actionItemRepo).findAll();
        assertEquals(expected,actual);

    }

    @Test
    void getActionItemById_whenIDisValid() {
    //GIVEN
    when(actionItemRepo.findById("2")).thenReturn(
        Optional.of(ActionItem.builder()
        .id("2")
        .actionTitle ("Äkschn Zwo")
        .imageName ("")
        .actionDescription("Der Peter geht ab")
        .childFriendly ("true")
        .openingSeason ("Von O bis O")
        .openingHours ("24/7")
        .estDuration ("2h")
        .price ("ne Mark")
        .homepage("www.de")
        .build()));

    //WHEN
    ActionItem actual = actionItemService.getActionItemById("2");

    //THEN
    ActionItem expected = ActionItem.builder()
            .id("2")
            .actionTitle ("Äkschn Zwo")
            .imageName ("")
            .actionDescription("Der Peter geht ab")
            .childFriendly ("true")
            .openingSeason ("Von O bis O")
            .openingHours ("24/7")
            .estDuration ("2h")
            .price ("ne Mark")
            .homepage("www.de")
            .build();

    verify(actionItemRepo).findById("2");
    assertEquals(expected, actual);
    }
    @Test
    void getActionItemById_whenIDisNotValid_shouldThrowException() {
        //GIVEN
        when(actionItemRepo.findById("4711")).thenReturn(Optional.empty());
        //WHEN //THEN
        assertThrows(NoSuchElementException.class, () -> actionItemService.getActionItemById("4711"));
        verify(actionItemRepo).findById("4711");
    }

    @Test
    void addActionItem(){
        //GIVEN
        ActionItem item = ActionItem.builder()

                .actionTitle ("Äkschn Zwo")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();
        when(actionItemRepo.insert(item)).thenReturn(ActionItem.builder()
                .id("2")
                .actionTitle ("Äkschn Zwo")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build());

        //WHEN
        NewActionItemDto newItem = NewActionItemDto.builder()
                .actionTitle ("Äkschn Zwo")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();
        ActionItem actual = actionItemService.addNewActionItem(newItem);

        //THEN
        ActionItem expected = ActionItem.builder()
                .id("2")
                .actionTitle ("Äkschn Zwo")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();
        verify(actionItemRepo).insert(item);
        assertEquals(expected, actual);

    }

    @Test
    void deleteActionitemById() {
        //Given
        //WHEN
        actionItemService.deleteActionitemById("1");
        //Then
        verify(actionItemRepo).deleteById("1");
    }
}