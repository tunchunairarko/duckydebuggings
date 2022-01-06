package com.DuckyDebugging.data.mapper;

import com.DuckyDebugging.models.UserAvailability;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserAvailabilityMapper implements RowMapper<UserAvailability> {
    @Override
    public UserAvailability mapRow(ResultSet rs, int rowNum) throws SQLException {
        UserAvailability userAvailability = new UserAvailability();
        userAvailability.setId(rs.getInt("id"));
        userAvailability.setUserAcc_id(rs.getInt("userAcc_id"));
        userAvailability.setStarting_date(rs.getDate("starting_date").toString());
        userAvailability.setEnding_date(rs.getDate("ending_date").toString());
        return userAvailability;
    }
}
