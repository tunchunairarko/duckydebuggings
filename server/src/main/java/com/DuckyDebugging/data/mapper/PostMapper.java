package com.DuckyDebugging.data.mapper;

import com.DuckyDebugging.models.Post;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PostMapper implements RowMapper<Post> {
    @Override
    public Post mapRow(ResultSet rs, int rowNum) throws SQLException {
        Post post = new Post();
        post.setPost_id(rs.getInt("post_id"));
        post.setUserAcc_id(rs.getInt("userAcc_id"));
        post.setPost_title(rs.getString("post_title"));
        post.setPost_short_description(rs.getString("post_short_description"));
        post.setPost_featured_image(rs.getString("post_featured_image"));
        post.setPost_body(rs.getString("post_body"));
        post.setCategory_id(rs.getInt("category_id"));
        post.setTags(rs.getString("tags"));
        return  post;

    }
}
