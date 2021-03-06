package com.DuckyDebugging.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.sql.Timestamp;
import java.util.Date;


@Data
public class UserDetailAccount {
    private int userAccount_id;
    private String username;
    private String email;
    @JsonProperty( value = "password", access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String phone;
    private String address;
    private String avatar;
    private int userRole_id;
    private String education;
    private String skills;
    private Timestamp accountCreation_date;
    private String designation;
    private String bio;
    private String roleName;
    private UserRole userRole;
    private UserAvailability userAvailability;

}
