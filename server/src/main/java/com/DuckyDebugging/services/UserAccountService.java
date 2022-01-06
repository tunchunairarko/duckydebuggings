package com.DuckyDebugging.services;


import com.DuckyDebugging.data.UserAccountRepository;
import com.DuckyDebugging.models.UserAccount;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserAccountService {

    private final UserAccountRepository repository;

    public UserAccountService(UserAccountRepository repository) {
        this.repository = repository;
    }

    public List<UserAccount> findAll() {
        return repository.findAll();
    }

    public UserAccount findById(int accountId) {
        return repository.findById(accountId);
    }

    public Result<UserAccount> add(UserAccount userAccount) {
        Result<UserAccount> result = validate(userAccount);
        if (!result.isSuccess()) {
            return result;
        }

        if (userAccount.getUserAccount_id() != 0) {
            result.addMessage("accountId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        userAccount = repository.add(userAccount);
        result.setPayload(userAccount);
        return result;
    }

    public Result<UserAccount> update(UserAccount userAccount) {
        Result<UserAccount> result = validate(userAccount);
        if (!result.isSuccess()) {
            return result;
        }

        if (userAccount.getUserAccount_id() <= 0) {
            result.addMessage("UserAccountId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.update(userAccount)) {
            String msg = String.format("UserAccountId: %s, not found", userAccount.getUserAccount_id());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteById(int userAccountId) {
        return repository.deleteById(userAccountId);
    }

    private Result<UserAccount> validate(UserAccount userAccount) {
        Result<UserAccount> result = new Result<>();
        if (userAccount == null) {
            result.addMessage("user cannot be null", ResultType.INVALID);
            return result;
        }

        if (Validations.isNullOrBlank(userAccount.getUsername())) {
            result.addMessage("name is required", ResultType.INVALID);
        }

        return result;
    }
}

