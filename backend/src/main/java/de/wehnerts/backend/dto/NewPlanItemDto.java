package de.wehnerts.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "planItems")
public class NewPlanItemDto {

    private String actionItemId;
    private String actionItemName;
    private String planDescription;
    private String plannedOn;
    private String plannedBy;
    private String[] finalGang;
    private String[] dateOptions;
    private String finalDate;
    private String status;
}


