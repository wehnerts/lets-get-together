package de.wehnerts.backend.service;

import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.dto.UserVoteDto;
import de.wehnerts.backend.mapper.PlanItemMapper;
import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.model.DateOption;
import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class VotingServiceTest {
private final PlanItemRepo planItemRepo = mock(PlanItemRepo.class);
private final PlanItemMapper planItemMapper = mock(PlanItemMapper.class);
private final VotingService votingService = new VotingService(planItemRepo, planItemMapper);

    @Test
    void updatePlanItem() {
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

        PlanItemDto expected = PlanItemDto.builder()
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
        when(planItemRepo.findById("4711")).thenReturn(Optional.of(planItem));
        when(planItemRepo.save(planItem)).thenReturn(planItem);

        when(planItemMapper.mapToDto(planItem,"Ringelpietz")).thenReturn(expected);
        //WHEN
        PlanItemDto actual = votingService.updatePlanItem(userVoteDto);
        assertEquals(expected, actual);
    }
}