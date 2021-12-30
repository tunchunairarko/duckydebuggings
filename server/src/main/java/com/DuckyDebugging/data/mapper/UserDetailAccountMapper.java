package com.DuckyDebugging.data.mapper;

import com.DuckyDebugging.models.UserDetailAccount;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;


public class UserDetailAccountMapper implements RowMapper<UserDetailAccount> {
    @Override
    public UserDetailAccount mapRow(ResultSet resultSet, int i) throws SQLException {
        UserDetailAccount userDetailAccount = new UserDetailAccount();
        userDetailAccount.setUserAccount_id(resultSet.getInt("userAccount_id"));
        userDetailAccount.setUsername(resultSet.getString("username"));
        userDetailAccount.setEmail(resultSet.getString("email"));
        userDetailAccount.setPassword(resultSet.getString("password"));
        userDetailAccount.setPhone(resultSet.getString("phone"));
        userDetailAccount.setAddress(resultSet.getString("address"));
        userDetailAccount.setAvatar(resultSet.getString("avatar"));
        userDetailAccount.setUserRole_id(resultSet.getInt("userRole_id"));
        userDetailAccount.setEducation(resultSet.getString("education"));
        userDetailAccount.setSkills(resultSet.getString("skills"));
        userDetailAccount.setAccountCreation_date(resultSet.getTimestamp("accountCreation_date"));
        userDetailAccount.setDesignation(resultSet.getString("designation"));
        userDetailAccount.setBio(resultSet.getString("bio"));
        userDetailAccount.setId(resultSet.getInt("id"));
        userDetailAccount.setStarting_date(resultSet.getDate("starting_date"));
        userDetailAccount.setEnding_date(resultSet.getDate("ending_date"));

        return  userDetailAccount;
    }
}
