package com.DuckyDebugging.data.mapper;

import com.DuckyDebugging.models.PostCategory;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PostCategoryMapper implements RowMapper<PostCategory> {

    @Override
    public PostCategory mapRow(ResultSet rs, int rowNum) throws SQLException {
        PostCategory postCategory = new PostCategory();
        postCategory.setPost_category_id(rs.getInt("post_category_id"));
        postCategory.setPost_category_name(rs.getString("post_category_name"));
        return postCategory;
    }
}
