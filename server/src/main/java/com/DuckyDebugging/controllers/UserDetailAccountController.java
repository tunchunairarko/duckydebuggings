package com.DuckyDebugging.controllers;

import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.UserDetailAccount;
import com.DuckyDebugging.services.UserAccountService;
import com.DuckyDebugging.services.Result;
import com.DuckyDebugging.services.UserDetailAccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/userDetail")
public class UserDetailAccountController {

    private final UserDetailAccountService service;

    public UserDetailAccountController(UserDetailAccountService service) {
        this.service = service;
    }

    @GetMapping
    public List<UserDetailAccount> findAll() {
        return service.findAll();
    }

    @GetMapping("/{userAccountId}")
    public UserDetailAccount findById(@PathVariable int userAccountId) {
        return service.findById(userAccountId);
    }


}

