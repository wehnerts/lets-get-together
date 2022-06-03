package de.wehnerts.backend.service;

import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.repository.MembersRepo;
import org.junit.jupiter.api.Test;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MembersServiceTest {

    private final MembersRepo membersRepo = mock(MembersRepo.class);
    private final MembersService membersService = new MembersService(membersRepo);

    @Test
    void getAllMembers() {
        //GIVEN
        MemberWorkItem member1 = MemberWorkItem.builder()
                .id("666")
                .username("Beast")
                .build();
        MemberWorkItem member2 = MemberWorkItem.builder()
                .id("667")
                .username("Neighbor of Bast")
                .build();
        when(membersRepo.findAll()).thenReturn(List.of(member1, member2));
        //WHEN
        List<MemberWorkItem>actual=membersService.getAllMembers();
        //THEN
        List<MemberWorkItem>expected=List.of(
                MemberWorkItem.builder()
                        .id("666")
                        .username("Beast")
                        .build(),
                MemberWorkItem.builder()
                        .id("667")
                        .username("Neighbor of Bast")
                        .build());
        verify(membersRepo).findAll();
        assertEquals(expected, actual);
    }
}