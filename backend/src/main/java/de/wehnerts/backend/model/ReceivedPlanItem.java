package de.wehnerts.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "planItems")
public class ReceivedPlanItem {
    @Id
    private String id;
    private String actionItemId;
    private String actionItemName;
    private String planDescription;
    private String plannedOn;
    private String plannedBy;
    private List<MemberWorkItem> finalGang;
    private List <DateOption> dateOptions;
    private String finalDate;
    private String status;
}
