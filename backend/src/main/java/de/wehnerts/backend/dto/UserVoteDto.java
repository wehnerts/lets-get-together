package de.wehnerts.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class UserVoteDto {
        private String planItemId;
        private String userId;
        private String username;
        private String Option1;
        private String Option2;
        private String Option3;
        private String Option4;
        private String Option5;

}

