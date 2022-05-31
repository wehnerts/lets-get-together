package de.wehnerts.backend.service;

import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.ActionItemRepo;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PlanItemServiceTest {
    private final PlanItemRepo planItemRepo = mock(PlanItemRepo.class);
    private final ActionItemRepo actionItemRepo = mock(ActionItemRepo.class);
    private final PlanItemService planItemService = new PlanItemService(planItemRepo, actionItemRepo);
    @Test
    void getPlanItems() {
        //GIVEN
        PlanItem plan1 = PlanItem.builder()
                .id("4711")
                .actionItemId("1234567")
                .planDescription("Wir Treffen uns beim Wirtshaus")
                .plannedOn("29.05.2022")
                .plannedBy("Sönke")
                .finalGang(new String[]{"Sönke","Robert"})
                .dateOptions(new String[]{"02.06.2022","09.06.2022"})
                .finalDate("")
                .status("DRAFT")
                .build();
        PlanItem plan2 = PlanItem.builder()
                .id("4714")
                .actionItemId("8834567")
                .planDescription("Wir Fahren Rad")
                .plannedOn("30.05.2022")
                .plannedBy("Robert")
                .finalGang(new String[]{"Tomm","Sönke","Robert"})
                .dateOptions(new String[]{"12.06.2022","19.06.2022"})
                .finalDate("")
                .status("DRAFT")
                .build();
        ActionItem item1 =ActionItem.builder()
                .id("1234567")
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
        ActionItem item2 =ActionItem.builder()
                .id("8834567")
                .actionTitle ("Äkschn ZWoo")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();
        when(planItemRepo.findAll()).thenReturn(List.of(plan1, plan2));


        when(actionItemRepo.findById("1234567")).thenReturn(Optional.of(item1));
        when(actionItemRepo.findById("8834567")).thenReturn(Optional.of(item2));


        //WHEN
        List <PlanItemDto>actual=planItemService.getPlanItems();

        //THEN
        List <PlanItemDto> expected = List.of(PlanItemDto.builder()
                .id("4711")
                .actionItemId("1234567")
                .actionItemName("Äkschn One")
                .planDescription("Wir Treffen uns beim Wirtshaus")
                .plannedOn("29.05.2022")
                .plannedBy("Sönke")
                .finalGang(new String[]{"Sönke","Robert"})
                .dateOptions(new String[]{"02.06.2022","09.06.2022"})
                .finalDate("")
                .status("DRAFT")
                .build(),
        PlanItemDto.builder()
                .id("4714")
                .actionItemId("8834567")
                .actionItemName("Äkschn ZWoo")
                .planDescription("Wir Fahren Rad")
                .plannedOn("30.05.2022")
                .plannedBy("Robert")
                .finalGang(new String[]{"Tomm","Sönke","Robert"})
                .dateOptions(new String[]{"12.06.2022","19.06.2022"})
                .finalDate("")
                .status("DRAFT")
                .build()
        );
        verify(planItemRepo).findAll();
        assertEquals(expected, actual);
    }
}