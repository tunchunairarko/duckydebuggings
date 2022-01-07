package com.DuckyDebugging.data;

import com.DuckyDebugging.data.mapper.PostCategoryMapper;
import com.DuckyDebugging.data.mapper.UserRoleMapper;
import com.DuckyDebugging.models.PostCategory;
import com.DuckyDebugging.models.UserRole;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class PostCategoryJdbcTemplateRepository implements  PostCategoryRepository{
    private JdbcTemplate jdbcTemplate;

    public PostCategoryJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<PostCategory> findAll() {
        final String sql = "select * from post_category;";
        return jdbcTemplate.query(sql,new PostCategoryMapper());

    }

    @Override
    public PostCategory findById(int id) {
        final String sql = "select * from post_category where post_category_id =?;";
        return jdbcTemplate.query(sql,new PostCategoryMapper(), id).stream().findAny().orElse(null);
    }
    @Override
    public PostCategory findByName(String name) {
        final String sql = "select * from post_category where post_category_name =?;";
        return jdbcTemplate.query(sql,new PostCategoryMapper(), name).stream().findAny().orElse(null);
    }

    @Override
    public PostCategory add(PostCategory postCategory) {
        final String sql = "insert into post_category (post_category_name) values(?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, postCategory.getPost_category_name());

            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        postCategory.setPost_category_id(keyHolder.getKey().intValue());
        return postCategory;
    }

    @Override
    public boolean update(PostCategory postCategory) {
        final String sql = "update post_category set post_category_name = ? where post_category_id = ?;";

        return jdbcTemplate.update(sql, postCategory.getPost_category_name(),postCategory.getPost_category_id()) > 0;
    }

    @Override
    public boolean deleteById(int id) {
        return jdbcTemplate.update(
                "delete from post_category where post_category_id = ?", id) > 0;
    }
}


