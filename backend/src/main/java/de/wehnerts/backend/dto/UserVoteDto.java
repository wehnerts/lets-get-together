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
        private String planId;
        private String userId;
        private String username;
        private String opt1;
        private String opt2;
        private String opt3;

}

