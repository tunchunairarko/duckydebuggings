package com.DuckyDebugging.data;

import com.DuckyDebugging.models.UserRole;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface UserRoleRepository {
    List<UserRole> findAll();

    UserRole findById(int id);
    UserRole findByName(String name);
    UserRole add(UserRole userRole);

    boolean update(UserRole userRole);

    boolean deleteById(int id);
}
