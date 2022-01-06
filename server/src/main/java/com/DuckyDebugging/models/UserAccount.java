package com.DuckyDebugging.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;
import java.util.Collection;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "useraccount")
public class UserAccount {
    @Id
    @Column(name = "userAccount_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userAccount_id;
    private String username;
    private String email;
    @JsonProperty( value = "password", access = JsonProperty.Access.WRITE_ONLY)
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
    private String roleName;
    @ManyToOne
    @JoinColumn(name = "user_role_user_role_id")
    private UserRole userRole;
}
