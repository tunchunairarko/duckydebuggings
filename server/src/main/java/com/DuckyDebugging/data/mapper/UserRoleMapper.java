package com.DuckyDebugging.data.mapper;

import com.DuckyDebugging.models.UserRole;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRoleMapper implements RowMapper<UserRole> {
    @Override
    public UserRole mapRow(ResultSet rs, int rowNum) throws SQLException {
        UserRole userRole = new UserRole();
        userRole.setUserRole_id(rs.getInt("userRole_id"));
        userRole.setRole_name(rs.getString("role_name"));
        return userRole;
    }
}
