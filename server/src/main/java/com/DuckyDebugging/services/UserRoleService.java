package com.DuckyDebugging.services;

import com.DuckyDebugging.data.UserRoleRepository;
import com.DuckyDebugging.models.UserRole;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserRoleService {
    private final UserRoleRepository userRoleRepository;

    public UserRoleService(UserRoleRepository userRoleRepository) {
        this.userRoleRepository = userRoleRepository;
    }
    public List<UserRole> findAll(){
        return userRoleRepository.findAll();
    }


    public UserRole findById(int id) {
        return userRoleRepository.findById(id);
    }

    public Result<UserRole> add(UserRole userRole) {{
        Result<UserRole> result = validate(userRole);
        if (!result.isSuccess()) {
            return result;
        }

        if (userRole.getUserRole_id() != 0) {
            result.addMessage("Id cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        userRole = userRoleRepository.add(userRole);
        result.setPayload(userRole);
        return result;
    }

    }

    public Result<UserRole> update(UserRole userRole) {

        Result<UserRole> result = validate(userRole);
        if (!result.isSuccess()) {
            return result;
        }

        if (userRole.getUserRole_id() <= 0) {
            result.addMessage("Id must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (userRoleRepository.findById(userRole.getUserRole_id()) == null){
            String msg = String.format("Id: %s, not found", userRole.getUserRole_id());
            result.addMessage(msg, ResultType.NOT_FOUND);
            return result;
        }

        if (!userRoleRepository.update(userRole)) {
            result.addMessage("Invalid", ResultType.INVALID);
            return result;
        }

        return result;
    }

    public boolean deleteById(int id) {
        return userRoleRepository.deleteById(id);
    }

    private Result<UserRole> validate(UserRole userRole) {
        Result<UserRole> result = new Result<>();
        if (userRole == null) {
            result.addMessage("role name cannot be null", ResultType.INVALID);
            return result;
        }

        if (Validations.isNullOrBlank(userRole.getRole_name())) {
            result.addMessage("role name is required", ResultType.INVALID);
        }
        return result;
    }
}
