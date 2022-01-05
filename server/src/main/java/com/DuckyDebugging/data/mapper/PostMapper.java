package com.DuckyDebugging.data.mapper;

import com.DuckyDebugging.models.Post;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PostMapper implements RowMapper<Post> {
    @Override
    public Post mapRow(ResultSet resultSet, int i) throws SQLException {
        Post post = new Post();
        post.setPost_id(resultSet.getInt("post_id"));
        post.setUserAcc_id(resultSet.getInt("userAcc_id"));
        post.setPost_title(resultSet.getString("post_title"));
        post.setPost_short_description(resultSet.getString("post_short_description"));
        post.setPost_featured_image(resultSet.getString("post_featured_image"));
        post.setPost_body(resultSet.getString("post_body"));
        post.setCategory_id(resultSet.getInt("category_id"));
        post.setTags(resultSet.getString("tags"));
        PostCategoryMapper postCategoryMapper = new PostCategoryMapper();
        post.setPostCategory(postCategoryMapper.mapRow(resultSet,i));
        return  post;

    }
}
