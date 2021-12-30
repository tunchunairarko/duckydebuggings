package com.DuckyDebugging.data.mapper;

import com.DuckyDebugging.models.UserAccount;


import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;


public class UserAccountMapper implements RowMapper<UserAccount> {
    @Override
    public UserAccount mapRow(ResultSet resultSet, int i) throws SQLException {
        UserAccount userAccount = new UserAccount();
        userAccount.setUserAccount_id(resultSet.getInt("userAccount_id"));
        userAccount.setUsername(resultSet.getString("username"));
        userAccount.setEmail(resultSet.getString("email"));
        userAccount.setPassword(resultSet.getString("password"));
        userAccount.setPhone(resultSet.getString("phone"));
        userAccount.setAddress(resultSet.getString("address"));
        userAccount.setAvatar(resultSet.getString("avatar"));
        userAccount.setUserRole_id(resultSet.getInt("userRole_id"));
        userAccount.setEducation(resultSet.getString("education"));
        userAccount.setSkills(resultSet.getString("skills"));
        userAccount.setAccountCreation_date(resultSet.getTimestamp("accountCreation_date"));
        userAccount.setDesignation(resultSet.getString("designation"));
        userAccount.setBio(resultSet.getString("bio"));

        return  userAccount;
    }
}
