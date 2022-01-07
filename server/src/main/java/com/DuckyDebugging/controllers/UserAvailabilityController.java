package com.DuckyDebugging.controllers;

import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.UserAvailability;
import com.DuckyDebugging.services.UserAccountService;
import com.DuckyDebugging.services.Result;
import com.DuckyDebugging.services.UserAvailabilityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/userAvailability")
public class UserAvailabilityController {

    private final UserAvailabilityService service;

    public UserAvailabilityController(UserAvailabilityService service) {
        this.service = service;
    }


    @GetMapping
    public List<UserAvailability> findAll() {
        return service.findAll();
    }

    @GetMapping("/{userAvailabilityId}")
    public UserAvailability findById(@PathVariable int userAvailabilityId) {
        return service.findById(userAvailabilityId);
    }


    @PostMapping
    public ResponseEntity<Object> add(@RequestBody UserAvailability userAvailability) {
        Result<UserAvailability> result = service.add(userAvailability);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{userAvailabilityId}")
    public ResponseEntity<Object> update(@PathVariable int userAvailabilityId, @RequestBody UserAvailability userAvailability) {
        if (userAvailabilityId != userAvailability.getId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<UserAvailability> result = service.update(userAvailability);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{userAvailabilityId}")
    public ResponseEntity<Void> deleteById(@PathVariable int userAvailabilityId) {
        if (service.deleteById(userAvailabilityId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        throw new RecordNotFoundException("Sorry, Record not found");
    }

}


