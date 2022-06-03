package de.wehnerts.backend.controller;


import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.repository.MembersRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
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
    @BeforeEach
    public void cleanRepoAndSetItems(){
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
}