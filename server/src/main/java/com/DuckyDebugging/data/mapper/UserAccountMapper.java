package com.DuckyDebugging.data.mapper;

import com.DuckyDebugging.models.UserAccount;


import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;


public class UserAccountMapper implements RowMapper<UserAccount> {
    @Override
    public UserAccount mapRow(ResultSet resultSet, int i) throws SQLException {
        UserAccount userAccount = new UserAccount();
        userAccount.setUserAccount_id(resultSet.getInt("userAccount_id"));
        userAccount.setUsername(resultSet.getString("username"));
        userAccount.setEmail(resultSet.getString("email"));
        userAccount.setPassword(resultSet.getString("password"));
        userAccount.setPhone(resultSet.getDouble("phone"));
        userAccount.setAddress(resultSet.getString("address"));
        userAccount.setAvatar(resultSet.getString("avatar"));
        userAccount.setUserRole_id(resultSet.getInt("userRole_id"));
        userAccount.setEducation(resultSet.getString("education"));
        userAccount.setSkills(resultSet.getString("skills"));
        return  userAccount;
    }
}
