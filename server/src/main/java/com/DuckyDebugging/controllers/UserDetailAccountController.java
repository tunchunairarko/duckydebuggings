package com.DuckyDebugging.controllers;

import com.DuckyDebugging.models.UserDetailAccount;
import com.DuckyDebugging.services.UserDetailAccountService;
import com.DuckyDebugging.services.Result;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/detailedUsers")
public class UserDetailAccountController {

    private final UserDetailAccountService service;

    public UserDetailAccountController(UserDetailAccountService service) {
        this.service = service;
    }

    @GetMapping
    public List<UserDetailAccount> findAll() {
        return service.findAll();
    }

    @GetMapping("/{userDetailAccountId}")
    public UserDetailAccount findById(@PathVariable int userDetailAccountId) {
        return service.findById(userDetailAccountId);
    }

}