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
@Table(name = "useravailability")
public class UserAvailability {
    @Id
    @GeneratedValue
    private int id;
    private int userAcc_id;
    private String starting_date;
    private String ending_date;
}
