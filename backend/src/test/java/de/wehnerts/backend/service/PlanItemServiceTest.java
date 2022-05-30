package de.wehnerts.backend.service;

import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PlanItemServiceTest {
    private final PlanItemRepo planItemRepo = mock(PlanItemRepo.class);
    private final PlanItemService planItemService = new PlanItemService(planItemRepo);
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
        when(planItemRepo.findAll()).thenReturn(List.of(plan1, plan2));
        //WHEN
        List <PlanItem>actual=planItemService.getPlanItems();

        //THEN
        List <PlanItem> expected = List.of(PlanItem.builder()
                .id("4711")
                .actionItemId("1234567")
                .planDescription("Wir Treffen uns beim Wirtshaus")
                .plannedOn("29.05.2022")
                .plannedBy("Sönke")
                .finalGang(new String[]{"Sönke","Robert"})
                .dateOptions(new String[]{"02.06.2022","09.06.2022"})
                .finalDate("")
                .status("DRAFT")
                .build(),
        PlanItem.builder()
                .id("4714")
                .actionItemId("8834567")
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