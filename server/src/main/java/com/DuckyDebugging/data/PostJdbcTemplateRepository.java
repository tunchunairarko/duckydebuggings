package com.DuckyDebugging.data;

import com.DuckyDebugging.data.mapper.PostCategoryMapper;
import com.DuckyDebugging.data.mapper.PostMapper;
import com.DuckyDebugging.data.mapper.UserRoleMapper;
import com.DuckyDebugging.models.Post;
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
public class PostJdbcTemplateRepository  implements PostRepository {
    private JdbcTemplate jdbcTemplate;

    public PostJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Post> findAll() {

        final String sql = "select p.post_id,p.userAcc_id,p.post_title,p.post_short_description,p.post_featured_image,p.post_body,p.category_id,p.tags,pc.post_category_name,pc.post_category_id from post as p inner join post_category as pc on p.category_id=pc.post_category_id;";
        return jdbcTemplate.query(sql,new PostMapper());
    }

    @Override
    public Post findById(int id) {
        final String sql = "select post_id,userAcc_id,post_title,post_short_description,post_featured_image,post_body,category_id,tags from post where post_id =?;";
        return jdbcTemplate.query(sql,new PostMapper(), id).stream().findAny().orElse(null);
    }
    public PostCategory findByName(String name) {
        final String sql = "select * from post_category where post_category_name =?;";
        return jdbcTemplate.query(sql,new PostCategoryMapper(), name).stream().findAny().orElse(null);
    }

    @Override
    public Post add(Post post) {
        final String sql = "insert into post (userAcc_id,post_title,post_short_description,post_featured_image,post_body,category_id,tags) values(?,?,?,?,?,?,?);";
        PostCategory postCategory=findByName(post.getCategoryName());

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1, post.getUserAcc_id());
            ps.setString(2, post.getPost_title());
            ps.setString(3, post.getPost_short_description());
            ps.setString(4, post.getPost_featured_image());
            ps.setString(5, post.getPost_body());
            ps.setInt(6, postCategory.getPost_category_id());
            ps.setString(7, post.getTags());

            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        post.setPost_id(keyHolder.getKey().intValue());
        return post;
    }

    @Override
    public boolean update(Post post) {


        final String sql = "update post set "

                + "post_title = ?, "
                + "post_short_description = ?, "
                + "post_featured_image = ?, "
                + "post_body = ?, "
                + "tags = ? "
                + "where post_id = ?;";

        return jdbcTemplate.update(sql,

                post.getPost_title(),
                post.getPost_short_description(),
                post.getPost_featured_image(),
                post.getPost_body(),
                post.getTags(),
                post.getPost_id()) > 0;
    }

    @Override
    public boolean deleteById(int id) {
        return jdbcTemplate.update(
                "delete from post where post_id = ?", id) > 0;
    }
}


