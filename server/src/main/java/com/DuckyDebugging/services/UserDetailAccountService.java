package com.DuckyDebugging.services;


import com.DuckyDebugging.data.UserDetailAccountRepository;
import com.DuckyDebugging.models.UserDetailAccount;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserDetailAccountService {

    private final UserDetailAccountRepository repository;

    public UserDetailAccountService(UserDetailAccountRepository repository) {
        this.repository = repository;
    }

    public List<UserDetailAccount> findAll() {
        return repository.findAll();
    }

    public UserDetailAccount findById(int accountId) {
        return repository.findById(accountId);
    }


}


