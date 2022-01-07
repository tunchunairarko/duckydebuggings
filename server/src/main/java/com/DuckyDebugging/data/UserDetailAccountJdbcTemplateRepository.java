package com.DuckyDebugging.data;

import com.DuckyDebugging.data.mapper.UserDetailAccountMapper;
import com.DuckyDebugging.data.mapper.UserRoleMapper;
import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.UserDetailAccount;
import com.DuckyDebugging.models.UserRole;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
@Repository
public class UserDetailAccountJdbcTemplateRepository implements UserDetailAccountRepository {
    private JdbcTemplate jdbcTemplate;

    public UserDetailAccountJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<UserDetailAccount> findAll() {


        final String sql = "select u.userAccount_id,u.username,u.email,u.phone,u.address,u.avatar,u.userRole_id,u.education,u.skills,u.accountCreation_date,u.designation,u.bio,ur.role_name," +
                "availability.id,availability.userAcc_id,availability.starting_date,availability.ending_date from useraccount as u " +
                "inner join user_role as ur on u.userRole_id=ur.userRole_id inner join useravailability availability on u.userAccount_id = availability.userAcc_id;";

        return jdbcTemplate.query(sql,new UserDetailAccountMapper());

    }

    @Override
    public UserDetailAccount findById(int id) {
        final String sql = "select u.userAccount_id,u.username,u.email,u.phone,u.address,u.avatar,u.userRole_id,u.education,u.skills,u.accountCreation_date,u.designation,u.bio,ur.role_name," +
                "availability.id,availability.userAcc_id,availability.starting_date,availability.ending_date from useraccount as u " +
                "inner join user_role as ur on u.userRole_id=ur.userRole_id inner join useravailability availability on u.userAccount_id = availability.userAcc_id "+
                "where u.userAccount_id = ?";
        return jdbcTemplate.query(sql,new UserDetailAccountMapper(), id).stream().findAny().orElse(null);
    }
    @Override
    public UserRole findByName(String name) {
        final String sql = "select * from user_role where role_name =?;";
        return jdbcTemplate.query(sql, new UserRoleMapper(), name).stream().findAny().orElse(null);
    }

}
