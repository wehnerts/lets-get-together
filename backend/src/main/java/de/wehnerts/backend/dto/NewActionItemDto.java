package de.wehnerts.backend.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NewActionItemDto {

    private String actionTitle;
    private String imageName;
    private String actionDescription;
    private String childFriendly;
    private String openingSeason;
    private String openingHours;
    private String estDuration;
    private String price;
    private String homepage;

}

