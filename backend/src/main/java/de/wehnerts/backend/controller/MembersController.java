package de.wehnerts.backend.controller;

import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.service.MembersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/members")
public class MembersController {
    private final MembersService membersService;
    @Autowired
    public MembersController(MembersService membersService) {
        this.membersService = membersService;
    }
    @GetMapping
    public List<MemberWorkItem> getAllMembers(){
        return membersService.getAllMembers();
    }

}
