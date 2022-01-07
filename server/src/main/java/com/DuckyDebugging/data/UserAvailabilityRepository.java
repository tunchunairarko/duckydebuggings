package com.DuckyDebugging.data;

import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.UserAvailability;
import com.DuckyDebugging.models.UserRole;

import java.util.List;

public interface UserAvailabilityRepository {
    List<UserAvailability> findAll();
    UserAvailability findById(int id);
    UserAvailability add(UserAvailability userAvailability);
    boolean update(UserAvailability userAvailability);
    boolean deleteById(int id);
}