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

    public Result<UserDetailAccount> add(UserDetailAccount userDetailAccount) {
        Result<UserDetailAccount> result = validate(userDetailAccount);
        if (!result.isSuccess()) {
            return result;
        }

        if (userDetailAccount.getUserAccount_id() != 0) {
            result.addMessage("accountId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        userDetailAccount = repository.add(userDetailAccount);
        result.setPayload(userDetailAccount);
        return result;
    }

    public Result<UserDetailAccount> update(UserDetailAccount userDetailAccount) {
        Result<UserDetailAccount> result = validate(userDetailAccount);
        if (!result.isSuccess()) {
            return result;
        }

        if (userDetailAccount.getUserAccount_id() <= 0) {
            result.addMessage("UserAccountId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.update(userDetailAccount)) {
            String msg = String.format("UserAccountId: %s, not found", userDetailAccount.getUserAccount_id());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteById(int userDetailAccountId) {
        return repository.deleteById(userDetailAccountId);
    }

    private Result<UserDetailAccount> validate(UserDetailAccount userDetailAccount) {
        Result<UserDetailAccount> result = new Result<>();
        if (userDetailAccount == null) {
            result.addMessage("user cannot be null", ResultType.INVALID);
            return result;
        }

        if (Validations.isNullOrBlank(userDetailAccount.getUsername())) {
            result.addMessage("name is required", ResultType.INVALID);
        }

        return result;
    }
}


