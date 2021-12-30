package com.DuckyDebugging.models;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class UserAccount {
    private int userAccount_id;
    private String username;
    private String email;
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
}
