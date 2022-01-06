package com.DuckyDebugging.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Post")
public class Post {
    @Id
    @Column(name = "post_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int post_id;
    private int userAcc_id;
    private String post_title;
    private String post_short_description;
    private String post_featured_image;
    private String post_body;
    @JsonProperty( value = "category_id", access = JsonProperty.Access.WRITE_ONLY)
    private int category_id;
    private String tags;
    @ManyToOne
    @JoinColumn(name = "post_category_post_category_id")
    private PostCategory postCategory;
    private String CategoryName;
}
