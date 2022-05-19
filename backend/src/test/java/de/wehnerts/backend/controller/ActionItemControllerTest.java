package de.wehnerts.backend.controller;

import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.repository.ActionItemRepo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ActionItemControllerTest {

    @Autowired
    private WebTestClient testClient;
    @Autowired
    private ActionItemRepo actionItemRepo;


    @Test
    void getActionItems() {
        //GIVEN

        ActionItem item1 = ActionItem.builder()
                            .actionTitle ("Ab geht er")
                            .imageName ("")
                            .actionDescription("Der Peter geht ab")
                            .childFriendly (true)
                            .openingSeason ("Von O bis O")
                            .openingHours ("24/7")
                            .estDuration ("2h")
                            .price ("ne Mark")
                            .homepage("www.de")
                            .build();
        actionItemRepo.insert(item1);
        //WHEN
        List<ActionItem> actual = testClient.get()
                .uri("/api/actionitem")
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(ActionItem.class)
                .returnResult()
                .getResponseBody();
        //THEN
        List<ActionItem> expected = List.of(ActionItem.builder()
                .id(item1.getId())
                .actionTitle ("Ab geht er")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly (true)
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build());
        assertEquals(expected, actual);
    }
}