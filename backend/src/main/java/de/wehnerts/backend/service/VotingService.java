package de.wehnerts.backend.service;

import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.dto.UserVoteDto;
import de.wehnerts.backend.mapper.PlanItemMapper;
import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.model.PlanItem;
import de.wehnerts.backend.repository.PlanItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;


@Service
public class VotingService {
    private final PlanItemRepo planItemRepo;
    private final PlanItemMapper planItemMapper;

    @Autowired
    public VotingService(PlanItemRepo planItemRepo, PlanItemMapper planItemMapper) {
        this.planItemRepo = planItemRepo;
        this.planItemMapper = planItemMapper;
    }

    public PlanItemDto updatePlanItem(UserVoteDto userVoteDto) {

        PlanItem planToUpdate = planItemRepo.findById(userVoteDto.getPlanId())
                .orElseThrow(() -> new NoSuchElementException("Das gesuchte PlanItem wurde nicht gefunden."));
        MemberWorkItem updatedMember = MemberWorkItem.builder()
                .id(userVoteDto.getUserId())
                .username(userVoteDto.getUsername())
                .opt1(userVoteDto.getOpt1())
                .opt2(userVoteDto.getOpt2())
                .opt3(userVoteDto.getOpt3())
                .build();

        planToUpdate.getFinalGang()
                .stream()
                .filter(e -> e.getId().equals(updatedMember.getId()))
                .findFirst()
                .ifPresent(e -> {
                            e.setOpt1(updatedMember.getOpt1());
                            e.setOpt2(updatedMember.getOpt2());
                            e.setOpt3(updatedMember.getOpt3());
                        }
                );

        return planItemMapper.mapToDto(planItemRepo.save(planToUpdate), planToUpdate.getActionItemName());

    }

}
