package de.wehnerts.backend.controller;

import de.wehnerts.backend.dto.PlanItemDto;
import de.wehnerts.backend.dto.UserVoteDto;
import de.wehnerts.backend.service.VotingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/uservote")
public class VotingController {
    private final VotingService votingService;

    public VotingController(VotingService votingService) {
        this.votingService = votingService;
    }

    @PutMapping
    PlanItemDto updatePlanItem(@RequestBody UserVoteDto userVoteDto){
        return (votingService.updatePlanItem(userVoteDto));
    }
}
