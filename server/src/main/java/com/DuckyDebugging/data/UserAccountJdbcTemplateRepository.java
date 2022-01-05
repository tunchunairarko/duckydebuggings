package com.DuckyDebugging.data;

import com.DuckyDebugging.data.mapper.UserAccountMapper;
import com.DuckyDebugging.data.mapper.UserRoleMapper;
import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.UserRole;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class UserAccountJdbcTemplateRepository  implements UserAccountRepository {
    private JdbcTemplate jdbcTemplate;
    //UserRoleRepository userRoleRepository;

    public UserAccountJdbcTemplateRepository(JdbcTemplate jdbcTemplate, UserRoleRepository userRoleRepository) {
        this.jdbcTemplate = jdbcTemplate;
        //this.userRoleRepository=userRoleRepository;
    }

    @Override
    public List<UserAccount> findAll() {

        final String sql = "select u.userAccount_id,u.username,u.email,u.phone,u.address,u.avatar,u.userRole_id,u.education,u.skills,u.accountCreation_date,u.designation,u.bio,ur.role_name from useraccount as u inner join user_role as ur on u.userRole_id=ur.userRole_id;";
        return jdbcTemplate.query(sql,new UserAccountMapper());

    }

    @Override
    public UserAccount findById(int id) {
        final String sql = "select u.userAccount_id,u.username,u.email,u.phone,u.address,u.avatar,u.userRole_id,u.education,u.skills,u.accountCreation_date,u.designation,u.bio,ur.role_name from useraccount as u inner join user_role as ur on u.userRole_id=ur.userRole_id where u.userAccount_id =?;";
        return jdbcTemplate.query(sql,new UserAccountMapper(), id).stream().findAny().orElse(null);
    }
    @Override
    public UserRole findByName(String name) {
        final String sql = "select * from user_role where role_name =?;";
        return jdbcTemplate.query(sql,new UserRoleMapper(), name).stream().findAny().orElse(null);
    }
    @Override
    public UserAccount add(UserAccount userAccount) {
        final String sql = "insert into useraccount (username,email,password,phone,address,avatar,userRole_id,education,skills,accountCreation_date,designation,bio) values(?,?,?,?,?,?,?,?,?,?,?,?);";

        UserRole userRole=findByName(userAccount.getRoleName());


        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            ps.setString(1, userAccount.getUsername());
            ps.setString(2, userAccount.getEmail());
            ps.setString(3, userAccount.getPassword());
            ps.setString(4, userAccount.getPhone());
            ps.setString(5, userAccount.getAddress());
            ps.setString(6, userAccount.getAvatar());
            ps.setInt(7, userRole.getUserRole_id());
            ps.setString(8, userAccount.getEducation());
            ps.setString(9, userAccount.getSkills());
            ps.setTimestamp(10, userAccount.getAccountCreation_date());
            ps.setString(11, userAccount.getDesignation());
            ps.setString(12, userAccount.getBio());

            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        userAccount.setUserAccount_id(keyHolder.getKey().intValue());
        return userAccount;
    }

    @Override
    public boolean update(UserAccount userAccount) {
        UserRole userRole=findByName(userAccount.getRoleName());
        final String sql = "update useraccount set "
                + "email = ?, "
                + "password = ?, "
                + "phone = ?, "
                + "address = ?, "
                + "avatar = ?, "
                + "userRole_id = ?, "
                + "education = ?, "
                + "skills = ?, "
                + "designation = ?, "
                + "bio = ? "
                + "where userAccount_id = ?;";

        return jdbcTemplate.update(sql,
                userAccount.getEmail(),
                userAccount.getPassword(),
                userAccount.getPhone(),
                userAccount.getAddress(),
                userAccount.getAvatar(),
                userRole.getUserRole_id(),
                userAccount.getEducation(),
                userAccount.getSkills(),
                userAccount.getDesignation(),
                userAccount.getBio(),
                userAccount.getUserAccount_id()) > 0;
    }

    @Override
    public boolean deleteById(int id) {
        return jdbcTemplate.update(
                "delete from useraccount where userAccount_id = ?", id) > 0;
    }
}


