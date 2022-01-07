package com.DuckyDebugging.data;

import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.UserRole;

import java.util.List;

public interface UserAccountRepository {
    List<UserAccount> findAll();

    UserAccount findById(int id);
    UserRole findByName(String name);
    UserAccount add(UserAccount userAccount);
    UserAccount findByCredentials(String userName, String passWord);
    boolean update(UserAccount userAccount);

    boolean deleteById(int id);
}
