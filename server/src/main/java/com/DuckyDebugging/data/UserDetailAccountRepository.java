package com.DuckyDebugging.data;

import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.UserDetailAccount;
import com.DuckyDebugging.models.UserRole;

import java.util.List;

public interface UserDetailAccountRepository {
    List<UserDetailAccount> findAll();

    UserDetailAccount findById(int id);

   UserRole findByName(String name);

}
