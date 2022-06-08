package de.wehnerts.backend.dto;

import de.wehnerts.backend.model.DateOption;
import de.wehnerts.backend.model.MemberWorkItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class NewPlanItemDto {

    private String actionItemId;
    private String planDescription;
    private String plannedOn;
    private String plannedBy;
    private List<MemberWorkItem> finalGang ;
    private List <DateOption> dateOptions;
    private String finalDate;
    private String status;

}


