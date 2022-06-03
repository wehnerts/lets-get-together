package de.wehnerts.backend.repository;

import de.wehnerts.backend.model.MemberWorkItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MembersRepo extends MongoRepository <MemberWorkItem, String>{}

