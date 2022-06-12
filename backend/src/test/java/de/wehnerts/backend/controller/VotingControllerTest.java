package de.wehnerts.backend.controller;

import de.wehnerts.backend.dto.UserVoteDto;
import de.wehnerts.backend.model.DateOption;
import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class VotingControllerTest {

    @Autowired
    private WebTestClient testClient;
    @Autowired
    private PlanItemRepo planItemRepo;

    @Test
    void updatePlanItem_() {
        //Given
        PlanItem planItem = PlanItem.builder()
                .id("4711")
                .actionItemId("12345")
                .actionItemName("Ringelpietz")
                .planDescription("Wir machen")
                .plannedOn("")
                .plannedBy("Herbert")
                .finalDate("01.01.2018")
                .status("Draft")
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("1007")
                                .username("James")
                                .opt1("0")
                                .opt2("0")
                                .opt3("0")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                                .build()))
                .build();
        PlanItem expected = PlanItem.builder()
                .id("4711")
                .actionItemId("12345")
                .actionItemName("Ringelpietz")
                .planDescription("Wir machen")
                .plannedOn("")
                .plannedBy("Herbert")
                .finalDate("01.01.2018")
                .status("Draft")
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("1007")
                                .username("James")
                                .opt1("3")
                                .opt2("4")
                                .opt3("3")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                                .build()))
                .build();
        UserVoteDto userVoteDto = UserVoteDto.builder()
                .planId("4711")
                .userId("1007")
                .username("James")
                .opt1("3")
                .opt2("4")
                .opt3("3")
                .build();
        planItemRepo.insert(planItem);
        //WHEN
        PlanItem actual = testClient.put()
                .uri("api/uservote")
                .bodyValue(userVoteDto)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(PlanItem.class)
                .returnResult()
                .getResponseBody();
        //Then
        assertEquals(expected, actual);

    }
}