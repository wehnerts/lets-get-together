package de.wehnerts.backend.service;

import de.wehnerts.backend.model.MemberWorkItem;
import de.wehnerts.backend.repository.MembersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MembersService {
    private final MembersRepo membersRepo;
    @Autowired
    public MembersService(MembersRepo membersRepo) {
        this.membersRepo = membersRepo;
    }

    public List<MemberWorkItem> getAllMembers() {
        return membersRepo.findAll();
    }
}
