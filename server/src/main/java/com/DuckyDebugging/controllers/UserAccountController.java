package com.DuckyDebugging.controllers;

import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.services.UserAccountService;
import com.DuckyDebugging.services.Result;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/basicUsers")
public class UserAccountController {

    private final UserAccountService service;

    public UserAccountController(UserAccountService service) {
        this.service = service;
    }

    @GetMapping
    public List<UserAccount> findAll() {
        return service.findAll();
    }

    @GetMapping("/{userAccountId}")
    public UserAccount findById(@PathVariable int userAccountId) {
        return service.findById(userAccountId);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody UserAccount userAccount) {
        Result<UserAccount> result = service.add(userAccount);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{userAccountId}")
    public ResponseEntity<Object> update(@PathVariable int userAccountId, @RequestBody UserAccount userAccount) {
        if (userAccountId != userAccount.getUserAccount_id()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<UserAccount> result = service.update(userAccount);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{userAccountId}")
    public ResponseEntity<Void> deleteById(@PathVariable int userAccountId) {
        if (service.deleteById(userAccountId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        throw new RecordNotFoundException("Sorry, Record not found");
    }

}

