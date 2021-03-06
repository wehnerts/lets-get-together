package de.wehnerts.backend.controller;

import de.wehnerts.backend.dto.NewActionItemDto;
import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.repository.ActionItemRepo;
import de.wehnerts.backend.security.model.AppUser;
import de.wehnerts.backend.security.repository.AppUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.reactive.server.WebTestClient;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ActionItemControllerTest {
    ActionItem item1 = null;
    ActionItem item2 = null;
    @Value("${wehnerts.lets-get-together-app.jwt.secret}")
    private String jwtToken;
    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    private WebTestClient testClient;

    @Autowired
    private ActionItemRepo actionItemRepo;

    @LocalServerPort
    private int port;

    @BeforeEach
    public void cleanRepoAndSetItems(){
        appUserRepository.deleteAll();
        jwtToken = generateJWTToken();
        actionItemRepo.deleteAll();
            item1 = ActionItem.builder()
                .id("1")
                .actionTitle ("Ab geht er")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();

        item2 = ActionItem.builder()
                .id("2")
                .actionTitle ("??kschn Zwo")
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
    void getActionItems() {
        //GIVEN

        actionItemRepo.insert(item1);
        actionItemRepo.insert(item2);

        //WHEN
        List<ActionItem> actual = testClient.get()
                .uri("/api/actionitem")
                .headers(http->http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(ActionItem.class)
                .returnResult()
                .getResponseBody();
        //THEN
        List<ActionItem> expected = List.of(ActionItem.builder()
                .id("1")
                .actionTitle ("Ab geht er")
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
                        .actionTitle ("??kschn Zwo")
                        .imageName ("")
                        .actionDescription("Der Peter geht ab")
                        .childFriendly ("true")
                        .openingSeason ("Von O bis O")
                        .openingHours ("24/7")
                        .estDuration ("2h")
                        .price ("ne Mark")
                        .homepage("www.de")
                        .build());
        assertEquals(expected, actual);
    }

    @Test
    void getActionItemById_when_id_is_2() {
        //GIVEN
        actionItemRepo.insert(item1);
        actionItemRepo.insert(item2);
        //WHEN
        ActionItem actual = testClient.get()
                .uri("/api/actionitem/"+"2")
                .headers(http->http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(ActionItem.class)
                .returnResult()
                .getResponseBody();
        //THEN

        ActionItem expected = ActionItem.builder()
                .id("2")
                .actionTitle ("??kschn Zwo")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();
        assertEquals(expected, actual);
    }

    @Test
    void getActionItemById_whenIdIsNotValid_shouldThrowException() {
        //GIVEN
        actionItemRepo.insert(item1);
        actionItemRepo.insert(item2);
        //WHEN
        testClient.get()
                .uri("/api/actionitem/" + "20")
                .headers(http->http.setBearerAuth(jwtToken))
                .exchange()


                //THEN
                .expectStatus().is4xxClientError();
    }

    @Test
    void addNewActionItem() {
        //GIVEN
        NewActionItemDto item1 = NewActionItemDto.builder()
                .actionTitle ("TestActionItemNew")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();

        //WHEN
        ActionItem actual = testClient.post()
                .uri("api/actionitem")
                .headers(http->http.setBearerAuth(jwtToken))
                .bodyValue(item1)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(ActionItem.class)
                .returnResult()
                .getResponseBody();

        //THEN
        assertNotNull(actual);
        assertNotNull(actual.getId());
        assertEquals(24, actual.getId().length());
        ActionItem expected = ActionItem.builder()
                .id(actual.getId())
                .actionTitle ("TestActionItemNew")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();
        assertEquals(actual, expected);
    }

    @Test
    void deleteActionitemById() {
    //GIVEN
        NewActionItemDto item1 = NewActionItemDto.builder()
                .actionTitle ("TestActionItemNew")
                .imageName ("")
                .actionDescription("Der Peter geht ab")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();
        ActionItem actual = testClient.post()
                .uri("api/actionitem")
                .headers(http->http.setBearerAuth(jwtToken))
                .bodyValue(item1)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(ActionItem.class)
                .returnResult()
                .getResponseBody();


        //WHEN
        assertNotNull(actual);
      testClient.delete()
              .uri("/api/actionitem/"+ actual.getId())
              .headers(http->http.setBearerAuth(jwtToken))
              .exchange()
        //THEN
                .expectStatus().is2xxSuccessful();
    }

    @Test
    void updateActionItemById() {
        //GIVEN
        actionItemRepo.insert(item1);
        ActionItem newItem = ActionItem.builder()
                .id("1")
                .actionTitle ("Changed")
                .imageName ("")
                .actionDescription("Changed")
                .childFriendly ("true")
                .openingSeason ("Von O bis O")
                .openingHours ("24/7")
                .estDuration ("2h")
                .price ("ne Mark")
                .homepage("www.de")
                .build();

        //WHEN
        ActionItem actual = testClient.put()
                .uri("api/actionitem")
                .headers(http->http.setBearerAuth(jwtToken))
                .bodyValue(newItem)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(ActionItem.class)
                .returnResult()
                .getResponseBody();
        //THEN
        assertEquals(actual, newItem);
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