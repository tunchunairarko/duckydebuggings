package com.DuckyDebugging.models;

import lombok.Data;

@Data
public class Post {
    private int post_id;
    private int userAcc_id;
    private String post_title;
    private String post_short_description;
    private String post_featured_image;
    private String post_body;
    private int category_id;
    private String tags;
}
