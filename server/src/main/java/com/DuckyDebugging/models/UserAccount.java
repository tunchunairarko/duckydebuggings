package com.DuckyDebugging.models;

import lombok.Data;

@Data
public class UserAccount {
    private int userAccount_id;
    private String username;
    private String email;
    private String password;
    private Double phone;
    private String address;
    private String avatar;
    private int userRole_id;
    private String education;
    private String skills;

}
