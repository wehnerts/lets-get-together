package de.wehnerts.backend.controller;


import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.repository.MembersRepo;
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
class MembersControllerTest {
    MemberWorkItem member1 = null;
    MemberWorkItem member2 = null;
    @Autowired
    private WebTestClient testClient;
    @Autowired
    private MembersRepo membersRepo;
    @Value("${wehnerts.lets-get-together-app.jwt.secret}")
    private String jwtToken;
    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @BeforeEach
    public void cleanRepoAndSetItems(){
        appUserRepository.deleteAll();
        jwtToken = generateJWTToken();
        membersRepo.deleteAll();
        member1 = MemberWorkItem.builder()
                .id("666")
                .username("Beast")
                .build();

        member2 = MemberWorkItem.builder()
                .id("667")
                .username("Neighbor of Beast")
                .build();
    }

    @Test
    void getAllMembers() {
        //GIVEN
        membersRepo.insert(member1);
        membersRepo.insert(member2);
        //WHEN
        List<MemberWorkItem>actual = testClient.get()
                .uri("/api/members")
                .headers(http->http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(MemberWorkItem.class)
                .returnResult()
                .getResponseBody();
        List<MemberWorkItem>expected = List.of(MemberWorkItem.builder()
                        .id("666")
                        .username("Beast")
                        .build(),

                MemberWorkItem.builder()
                        .id("667")
                        .username("Neighbor of Beast")
                        .build());
        assertEquals(expected, actual);
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