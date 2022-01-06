package com.DuckyDebugging.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "UserAccount")
public class UserAccount {
    @Id
    @Column(name = "userAccount_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userAccount_id;

    private String username;
    private String email;
    private String password;
    private String phone;
    private String address;
    private String avatar;
    @Column (name="userRole_id")
    private int userRole_id;
    private String education;
    private String skills;
    @Column (name="accountCreation_date")
    private Timestamp accountCreation_date;
    private String designation;
    private String bio;
}
