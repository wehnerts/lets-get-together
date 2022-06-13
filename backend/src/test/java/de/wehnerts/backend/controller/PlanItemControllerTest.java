package de.wehnerts.backend.controller;

import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.model.DateOption;
import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.ActionItemRepo;
import de.wehnerts.backend.repository.PlanItemRepo;
import de.wehnerts.backend.security.model.AppUser;
import de.wehnerts.backend.security.repository.AppUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PlanItemControllerTest {
    @Value("${wehnerts.lets-get-together-app.jwt.secret}")
    private String jwtToken;
    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

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
        appUserRepository.deleteAll();
        jwtToken = generateJWTToken();
        plan1 = PlanItem.builder()
                .id("4711")
                .actionItemId("1234567")
                .planDescription("Wir Treffen uns beim Wirtshaus")
                .plannedOn("29.05.2022")
                .plannedBy("Sönke")
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build(),
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                                .build(),
                        DateOption.builder()
                                .optionName("2")
                                .optionDate("22.10.2022")
                                .build()
                ))
                .finalDate("")
                .status("DRAFT")
                .build();
        plan2 = PlanItem.builder()
                .id("4714")
                .actionItemId("8834567")
                .planDescription("Wir Fahren Rad")
                .plannedOn("30.05.2022")
                .plannedBy("Robert")
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build(),
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                                .build(),
                        DateOption.builder()
                                .optionName("2")
                                .optionDate("22.10.2022")
                                .build()
                ))
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
                .uri("api/planitems")
                .headers(http->http.setBearerAuth(jwtToken))
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
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build(),
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                            .build(),
                        DateOption.builder()
                                .optionName("2")
                                .optionDate("22.10.2022")
                                .build()
                        ))
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
                        .finalGang(List.of(
                                MemberWorkItem.builder()
                                        .id("4711")
                                        .username("Sönke")
                                        .build(),
                                MemberWorkItem.builder()
                                        .id("4711")
                                        .username("Sönke")
                                        .build()))
                        .dateOptions(List.of(
                                DateOption.builder()
                                        .optionName("1")
                                        .optionDate("21.10.2022")
                                        .build(),
                                DateOption.builder()
                                        .optionName("2")
                                        .optionDate("22.10.2022")
                                        .build()
                        ))
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
                .uri("/api/planitems/"+"4711")
                .headers(http->http.setBearerAuth(jwtToken))
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
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build(),
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                                .build(),
                        DateOption.builder()
                                .optionName("2")
                                .optionDate("22.10.2022")
                                .build()
                ))
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
        //WHEN//THEN
        testClient.get()
                .uri("/api/planitems/"+"4712")
                .headers(http->http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is4xxClientError();


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
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build(),
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                                .build(),
                        DateOption.builder()
                                .optionName("2")
                                .optionDate("22.10.2022")
                                .build()
                ))
                .finalDate("")
                .status("DRAFT")
                .build();
        planItemRepo.insert(plan1);
        planItemRepo.insert(plan2);
        actionItemRepo.insert(item1);
        actionItemRepo.insert(item2);
        //WHEN
        PlanItemDto actual = testClient.get()
                .uri("/api/planitems/"+"4711")
                .headers(http->http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(PlanItemDto.class)
                .returnResult()
                .getResponseBody();
        //THEN
        assertNotNull(actual);
        assertEquals("Ups! ActionItem is lost!", actual.getActionItemName());
    }

    @Test
    void addPlanItem() {
        //GIVEN
        planItemRepo.insert(plan1);
        planItemRepo.insert(plan2);
        actionItemRepo.insert(item1);
        actionItemRepo.insert(item2);
        PlanItem item1 = PlanItem.builder()
                .actionItemId("1234567")
                .planDescription("description")
                .plannedOn("today")
                .plannedBy("Mork")
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build(),
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                                .build(),
                        DateOption.builder()
                                .optionName("2")
                                .optionDate("22.10.2022")
                                .build()
                ))
                .finalDate("")
                .status("DRAFT")
                .build();
        //WHEN
        PlanItem actual = testClient.post()
                .uri("api/planitems")
                .headers(http->http.setBearerAuth(jwtToken))
                .bodyValue(item1)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(PlanItem.class)
                .returnResult()
                .getResponseBody();
        //THEN
        assertNotNull(actual);
        assertNotNull(actual.getId());
        assertEquals(24, actual.getId().length());
        PlanItem expected = PlanItem.builder()
                .id(actual.getId())
                .actionItemId("1234567")
                .actionItemName("Äkschn One")
                .planDescription("description")
                .plannedOn("today")
                .plannedBy("Mork")
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build(),
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                                .build(),
                        DateOption.builder()
                                .optionName("2")
                                .optionDate("22.10.2022")
                                .build()
                ))
                .finalDate("")
                .status("DRAFT")
                .build();
        assertEquals(expected, actual);
    }

    @Test
    void deletePlanItemById() {
        //GIVEN
        PlanItem item1 = PlanItem.builder()
                .actionItemId("4711")
                .actionItemName("Huhu")
                .planDescription("description")
                .plannedOn("today")
                .plannedBy("Mork")
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build(),
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                                .build(),
                        DateOption.builder()
                                .optionName("2")
                                .optionDate("22.10.2022")
                                .build()
                ))
                .finalDate("")
                .status("DRAFT")
                .build();

        PlanItem actual = testClient.post()
                .uri("api/planitems")
                .headers(http->http.setBearerAuth(jwtToken))
                .bodyValue(item1)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(PlanItem.class)
                .returnResult()
                .getResponseBody();
        //WHEN
        assertNotNull(actual);
        testClient.delete()
                .uri("/api/planitems/"+actual.getId())
                .headers(http->http.setBearerAuth(jwtToken))
                .exchange()
        //THEN
                .expectStatus().is2xxSuccessful();
    }

    @Test
    void updatePlanItem() {
        //GIVEN
        planItemRepo.insert(plan1);
        actionItemRepo.insert(item1);
        PlanItem newplan1 = PlanItem.builder()
                .id("4711")
                .actionItemId("1234567")
                .actionItemName("Äkschn One")
                .planDescription("Wir Treffen uns irgendwo")
                .plannedOn("25.05.2022")
                .plannedBy("Sönke")
                .finalGang(List.of(
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build(),
                        MemberWorkItem.builder()
                                .id("4711")
                                .username("Sönke")
                                .build()))
                .dateOptions(List.of(
                        DateOption.builder()
                                .optionName("1")
                                .optionDate("21.10.2022")
                                .build(),
                        DateOption.builder()
                                .optionName("2")
                                .optionDate("22.10.2022")
                                .build()
                ))
                .finalDate("")
                .status("DRAFT")
                .build();
        //WHEN
        PlanItem actual = testClient.put()
                .uri("api/planitems")
                .headers(http->http.setBearerAuth(jwtToken))
                .bodyValue(newplan1)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(PlanItem.class)
                .returnResult()
                .getResponseBody();
        //THEN
        assertEquals(actual, newplan1);
    }
    private String generateJWTToken() {
        String hashedPassword = passwordEncoder.encode("passwort");
        AppUser testUser = AppUser.builder()
                .username("testuser")
                .password(hashedPassword)
                .build();
        appUserRepository.save(testUser);

        return testClient.post()
                .uri("/auth/login")
                .bodyValue(AppUser.builder()
                        .username("testuser")
                        .password("passwort")
                        .build())
                .exchange()
                .expectBody(String.class)
                .returnResult()
                .getResponseBody();
    }
}