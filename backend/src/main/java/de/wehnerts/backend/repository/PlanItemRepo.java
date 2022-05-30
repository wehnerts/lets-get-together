package de.wehnerts.backend.repository;

import de.wehnerts.backend.model.PlanItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanItemRepo extends MongoRepository<PlanItem, String> {
}
