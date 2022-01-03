package com.DuckyDebugging.controllers;

import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.UserRole;
import com.DuckyDebugging.services.Result;
import com.DuckyDebugging.services.UserRoleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/UserRole")
public class UserRoleController {
    private final UserRoleService service;

    public UserRoleController(UserRoleService service) {
        this.service = service;
    }
    @GetMapping("/{id}")
    public ResponseEntity<UserRole> findById(@PathVariable int id){
        UserRole userRole= service.findById(id);
        if (userRole == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(userRole);
    }
    @GetMapping
    public List<UserRole> findAll() {
        return service.findAll();
    }

    @RequestMapping(value = "/", produces = "application/json")
    @PostMapping
    public ResponseEntity<Object> add(@RequestBody UserRole  userRole) {
        Result<UserRole> result = service.add(userRole);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable int id, @RequestBody UserRole userRole){
        if (id != userRole.getUserRole_id()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        Result<UserRole> result = service.update(userRole);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable int id) {
        if (service.deleteById(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
