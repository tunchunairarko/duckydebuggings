package com.DuckyDebugging.data;

import com.DuckyDebugging.models.UserAccount;

import java.util.List;

public interface UserAccountRepository {
    List<UserAccount> findAll();

    UserAccount findById(int id);

    UserAccount add(UserAccount userAccount);

    boolean update(UserAccount userAccount);

    boolean deleteById(int id);
}
