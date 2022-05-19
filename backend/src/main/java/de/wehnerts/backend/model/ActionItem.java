package de.wehnerts.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document (collection = "actionItems")
public class ActionItem {
    @Id
    private String id;
    private String actionTitle;
    private String imageName;
    private String actionDescription;
    private Boolean childFriendly;
    private String openingSeason;
    private String openingHours;
    private String estDuration;
    private String price;
    private String homepage;


}
