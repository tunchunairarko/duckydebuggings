package com.DuckyDebugging.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "UserRole")
public class UserRole {
    @Id
    @GeneratedValue
    private int userRole_id;
    private String role_name;
}
