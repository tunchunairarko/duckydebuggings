package com.DuckyDebugging.data;

import com.DuckyDebugging.data.mapper.UserAccountMapper;
import com.DuckyDebugging.data.mapper.UserAvailabilityMapper;
import com.DuckyDebugging.data.mapper.UserRoleMapper;
import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.UserAvailability;
import com.DuckyDebugging.models.UserRole;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class UserAvailabilityJdbcTemplateRepository implements UserAvailabilityRepository   {
    private JdbcTemplate jdbcTemplate;
    //UserRoleRepository userRoleRepository;

    public UserAvailabilityJdbcTemplateRepository(JdbcTemplate jdbcTemplate, UserRoleRepository userRoleRepository) {
        this.jdbcTemplate = jdbcTemplate;
        //this.userRoleRepository=userRoleRepository;
    }

    @Override
    public List<UserAvailability> findAll() {

        final String sql = "select id,userAcc_id,starting_date,ending_date from useravailability;";
        return jdbcTemplate.query(sql,new UserAvailabilityMapper());

    }

    @Override
    public UserAvailability findById(int id) {
        final String sql = "select id,userAcc_id,starting_date,ending_date from useravailability where id=?";
        return jdbcTemplate.query(sql,new UserAvailabilityMapper(), id).stream().findAny().orElse(null);
    }

    @Override
    public UserAvailability add(UserAvailability userAvailability) {
        final String sql = "insert into useravailability (userAcc_id,starting_date,ending_date) values(?,?,?);";


        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1, userAvailability.getUserAcc_id());
            ps.setString(2, userAvailability.getStarting_date());
            ps.setString(3, userAvailability.getEnding_date());

            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        userAvailability.setId(keyHolder.getKey().intValue());
        return userAvailability;
    }

    @Override
    public boolean update(UserAvailability userAvailability) {

        final String sql = "update useravailability set "
                 +"userAcc_id = ?, "
                + "starting_date = ?, "
                + "ending_date = ? "
                + "where id = ?;";

        return jdbcTemplate.update(sql,
                userAvailability.getUserAcc_id(),
                userAvailability.getStarting_date(),
                userAvailability.getEnding_date(),
                userAvailability.getId()) > 0;
    }

    @Override
    public boolean deleteById(int id) {
        return jdbcTemplate.update(
                "delete from useravailability where id = ?", id) > 0;
    }
}



