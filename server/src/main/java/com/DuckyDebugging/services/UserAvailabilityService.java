package com.DuckyDebugging.services;


import com.DuckyDebugging.data.UserAccountRepository;
import com.DuckyDebugging.data.UserAvailabilityRepository;
import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.UserAvailability;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserAvailabilityService {

    private final UserAvailabilityRepository repository;

    public UserAvailabilityService(UserAvailabilityRepository repository) {
        this.repository = repository;
    }

    public List<UserAvailability> findAll() {
        return repository.findAll();
    }

    public UserAvailability findById(int availabilityId) {
        return repository.findById(availabilityId);
    }

    public Result<UserAvailability> add(UserAvailability userAvailability) {
        Result<UserAvailability> result = validate(userAvailability);
        if (!result.isSuccess()) {
            return result;
        }

        if (userAvailability.getId() != 0) {
            result.addMessage("Id cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        userAvailability = repository.add(userAvailability);
        result.setPayload(userAvailability);
        return result;
    }

    public Result<UserAvailability> update(UserAvailability userAvailability) {
        Result<UserAvailability> result = validate(userAvailability);
        if (!result.isSuccess()) {
            return result;
        }

        if (userAvailability.getUserAcc_id() <= 0) {
            result.addMessage("UserAccountId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.update(userAvailability)) {
            String msg = String.format("Id: %s, not found", userAvailability.getId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteById(int userAccountId) {
        return repository.deleteById(userAccountId);
    }

    private Result<UserAvailability> validate(UserAvailability userAvailability) {
        Result<UserAvailability> result = new Result<>();
        if (userAvailability == null) {
            result.addMessage("user cannot be null", ResultType.INVALID);
            return result;
        }

        return result;
    }
}

