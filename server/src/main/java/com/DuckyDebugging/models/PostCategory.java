package com.DuckyDebugging.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "post_category")
public class PostCategory {
    @Id
    @Column(name = "post_category_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int post_category_id;
    private String post_category_name;
}
