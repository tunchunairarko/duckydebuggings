package com.DuckyDebugging.data;

import com.DuckyDebugging.data.mapper.UserRoleMapper;
import com.DuckyDebugging.models.UserRole;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class UserRoleJdbcRepositoryTemplate implements  UserRoleRepository{
     private JdbcTemplate jdbcTemplate;

    public UserRoleJdbcRepositoryTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<UserRole> findAll() {
        final String sql = "select * from user_role;";
        return jdbcTemplate.query(sql,new UserRoleMapper());

    }

    @Override
    public UserRole findById(int id) {
        final String sql = "select * from user_role where userRole_id =?;";
        return jdbcTemplate.query(sql,new UserRoleMapper(), id).stream().findAny().orElse(null);
    }

    @Override
    public UserRole add(UserRole userRole) {
        final String sql = "insert into user_role (role_name) values(?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, userRole.getRole_name());

            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        userRole.setUserRole_id(keyHolder.getKey().intValue());
        return userRole;
    }

    @Override
    public boolean update(UserRole userRole) {
        final String sql = "update user_role set role_name = ? where userRole_id = ?;";

        return jdbcTemplate.update(sql, userRole.getRole_name(),userRole.getUserRole_id()) > 0;
    }

    @Override
    public boolean deleteById(int id) {
        return jdbcTemplate.update(
                "delete from user_role where userRole_id = ?", id) > 0;
    }
}


