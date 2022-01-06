package com.DuckyDebugging.data;

import com.DuckyDebugging.models.UserDetailAccount;

import java.util.List;

public interface UserDetailAccountRepository {
    List<UserDetailAccount> findAll();

    UserDetailAccount findById(int id);

    UserDetailAccount add(UserDetailAccount userDetailAccount);

    boolean update(UserDetailAccount userDetailAccount);

    boolean deleteById(int id);
}
