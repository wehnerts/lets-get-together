package de.wehnerts.backend.controller;

import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.ActionItemRepo;
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
    PlanItem plan1, plan2;
    ActionItem item1, item2;
    @Autowired
    private WebTestClient testClient;
    @Autowired
    private PlanItemRepo planItemRepo;
    @Autowired
    private ActionItemRepo actionItemRepo;
    @BeforeEach
    public void cleanRepoAndSetItems(){
        planItemRepo.deleteAll();
        actionItemRepo.deleteAll();
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
        item1 =ActionItem.builder()
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
        item2 =ActionItem.builder()
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

    }

    @Test
    void getPlanItems() {
        //GIVEN
        planItemRepo.insert(plan1);
        planItemRepo.insert(plan2);
        actionItemRepo.insert(item1);
        actionItemRepo.insert(item2);

        //WHEN
        List<PlanItemDto> actual = testClient.get()
                .uri("api/planitem")
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(PlanItemDto.class)
                .returnResult()
                .getResponseBody();
        //THEN
        List<PlanItemDto> expected = List.of(PlanItemDto.builder()
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
                .build());
        assertEquals(expected, actual);
    }

    @Test
    void getPlanItemById_whenID_is_OK() {
        //GIVEN
        planItemRepo.insert(plan1);
        planItemRepo.insert(plan2);
        actionItemRepo.insert(item1);
        actionItemRepo.insert(item2);
        //WHEN
        PlanItemDto actual = testClient.get()
                .uri("/api/planitem/"+"4711")
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(PlanItemDto.class)
                .returnResult()
                .getResponseBody();
        //THEN
        PlanItemDto expected = PlanItemDto.builder()
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
                .build();

        assertEquals(expected, actual);

    }
    @Test
    void getPlanItemById_whenID_is_NotOK_should_throw_Exception() {
        //GIVEN
        planItemRepo.insert(plan1);
        planItemRepo.insert(plan2);
        actionItemRepo.insert(item1);
        actionItemRepo.insert(item2);
        //WHEN
        testClient.get()
                .uri("/api/planitem/"+"4712")
                .exchange()
                .expectStatus().is5xxServerError();
        //THEN

    }
    @Test
    void getPlanItemById_whenActionID_is_NotOK_should_throw_Exception() {
        //GIVEN
        plan1 = PlanItem.builder()
                .id("4711")
                .actionItemId("12")
                .planDescription("Wir Treffen uns beim Wirtshaus")
                .plannedOn("29.05.2022")
                .plannedBy("Sönke")
                .finalGang(new String[]{"Sönke","Robert"})
                .dateOptions(new String[]{"02.06.2022","09.06.2022"})
                .finalDate("")
                .status("DRAFT")
                .build();
        planItemRepo.insert(plan1);
        planItemRepo.insert(plan2);
        actionItemRepo.insert(item1);
        actionItemRepo.insert(item2);
        //WHEN
        PlanItemDto actual = testClient.get()
                .uri("/api/planitem/"+"4711")
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(PlanItemDto.class)
                .returnResult()
                .getResponseBody();
        //THEN
        assertNotNull(actual);
        assertEquals("Ups! ActionItem is lost!", actual.getActionItemName());
    }
}