package de.wehnerts.backend.repository;

import de.wehnerts.backend.model.ActionItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActionItemRepo extends MongoRepository<ActionItem, String>{
}
