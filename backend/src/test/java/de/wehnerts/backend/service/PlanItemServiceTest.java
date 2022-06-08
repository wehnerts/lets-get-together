package de.wehnerts.backend.service;

import de.wehnerts.backend.dto.NewPlanItemDto;
import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.mapper.PlanItemMapper;
import de.wehnerts.backend.model.ActionItem;
import de.wehnerts.backend.model.DateOption;
import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.ActionItemRepo;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PlanItemServiceTest {
    private final PlanItemRepo planItemRepo = mock(PlanItemRepo.class);
    private final ActionItemRepo actionItemRepo = mock(ActionItemRepo.class);
    private final PlanItemMapper planItemMapper = mock(PlanItemMapper.class);
    private final PlanItemService planItemService = new PlanItemService(planItemRepo, actionItemRepo, planItemMapper);

    @Test
    void getPlanItems() {
        //GIVEN
        PlanItem plan1 = PlanItem.builder()
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

        PlanItem plan2 = PlanItem.builder()
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

        ActionItem item1 =ActionItem.builder()
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

        ActionItem item2 =ActionItem.builder()
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

        when(planItemRepo.findAll()).thenReturn(List.of(plan1, plan2));
        when(actionItemRepo.findById("1234567")).thenReturn(Optional.of(item1));
        when(actionItemRepo.findById("8834567")).thenReturn(Optional.of(item2));

        //WHEN
        List <PlanItemDto>actual=planItemService.getPlanItems();

        //THEN
        List <PlanItemDto> expected = List.of(PlanItemDto.builder()
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
                .build()
        );
        verify(planItemRepo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void getPlanItemById() {
        //GIVEN
        PlanItem plan1 = PlanItem.builder()
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

        PlanItemDto plan1Dto = PlanItemDto.builder()
                .id("4711")
                .actionItemId("1234567")
                .actionItemName ("Äkschn One")
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

        ActionItem item1 =ActionItem.builder()
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

        when(planItemRepo.findById("4711")).thenReturn(Optional.of(plan1));
        when(actionItemRepo.findById("1234567")).thenReturn(Optional.of(item1));
        when(planItemMapper.mapToDto(plan1, "Äkschn One")).thenReturn(plan1Dto);

        //WHEN
        PlanItemDto actual=planItemService.getPlanItemById("4711");

        //THEN
        PlanItemDto expected = PlanItemDto.builder()
                        .id("4711")
                        .actionItemId("1234567")
                        .actionItemName ("Äkschn One")
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


        verify(planItemRepo).findById("4711");
        assertEquals(expected, actual);
    }

    @Test
    void addPlanItem() {
        //GIVEN
        PlanItem planItem = PlanItem.builder()
                .id("8080")
                .actionItemId("1234567")
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

        PlanItemDto planItemDto = PlanItemDto.builder()
                .id("8080")
                .actionItemId("1234567")
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

        NewPlanItemDto newPlanItemDto = NewPlanItemDto.builder()
                .actionItemId("1234567")
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

        ActionItem actionItem =ActionItem.builder()
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

        when(planItemMapper.mapToEntity(newPlanItemDto)).thenReturn(planItem);
        when (planItemRepo.insert(any(PlanItem.class))).thenReturn(planItem);
        when(planItemMapper.mapToDto(planItem, "Ups! ActionItem is lost!" )).thenReturn(planItemDto);

        //WHEN

        PlanItemDto actual = planItemService.addPlanItem(newPlanItemDto);
        PlanItemDto expected = PlanItemDto.builder()
                .id("8080")
                .actionItemId("1234567")
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
        verify(planItemRepo).insert(planItem);
        assertEquals(expected, actual);
    }

    @Test
    void deletePlanById() {
        planItemService.deletePlanById("12");
        //Then
        verify(planItemRepo).deleteById("12");
    }

    @Test
    void updatePlanItem() {
        //GIVEN
        PlanItem newplan1 = PlanItem.builder()
                .id("4711")
                .actionItemId("1234567")
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
        PlanItemDto newplan1Dto = PlanItemDto.builder()
                .id("4711")
                .actionItemId("1234567")
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
        when(planItemRepo.save(newplan1)).thenReturn(newplan1);
        when(planItemMapper.mapToEntity(any(PlanItemDto.class))).thenReturn(newplan1);

        when(planItemMapper.mapToDto(newplan1, "Ups! ActionItem is lost!" )).thenReturn(newplan1Dto);
        PlanItemDto expected = PlanItemDto.builder()
                .id("4711")
                .actionItemId("1234567")
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
        PlanItemDto actual = planItemService.updatePlanItem(newplan1Dto);
        //THEN
        assertEquals(expected, actual);
    }
}