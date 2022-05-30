package de.wehnerts.backend.controller;

import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PlanItemControllerTest {
    PlanItem plan1 = null;
    PlanItem plan2 = null;
    @Autowired
    private WebTestClient testClient;
    @Autowired
    private PlanItemRepo planItemRepo;
    @BeforeEach
    public void cleanRepoAndSetItems(){
        planItemRepo.deleteAll();
        plan1 = PlanItem.builder()
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
        plan2 = PlanItem.builder()
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

    }

    @Test
    void getPlanItems() {
        //GIVEN
        planItemRepo.insert(plan1);
        planItemRepo.insert(plan2);
        //WHEN
        List<PlanItem> actual = testClient.get()
                .uri("api/planitem")
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(PlanItem.class)
                .returnResult()
                .getResponseBody();
        //THEN
        List<PlanItem> expected = List.of(PlanItem.builder()
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
                .build());
        assertEquals(expected, actual);


    }
}