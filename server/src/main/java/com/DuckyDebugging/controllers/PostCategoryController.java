package com.DuckyDebugging.controllers;

import com.DuckyDebugging.models.UserAccount;
import com.DuckyDebugging.models.PostCategory;
import com.DuckyDebugging.services.Result;
import com.DuckyDebugging.services.PostCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/PostCategory")
public class PostCategoryController {
    private final PostCategoryService service;

    public PostCategoryController(PostCategoryService service) {
        this.service = service;
    }
    @GetMapping("/{id}")
    public ResponseEntity<PostCategory> findById(@PathVariable int id){
        PostCategory postCategory= service.findById(id);
        if (postCategory == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(postCategory);
    }
    @GetMapping
    public List<PostCategory> findAll() {
        return service.findAll();
    }


    @PostMapping
    public ResponseEntity<Object> add(@RequestBody PostCategory  postCategory) {
        Result<PostCategory> result = service.add(postCategory);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable int id, @RequestBody PostCategory postCategory){
        if (id != postCategory.getPost_category_id()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        Result<PostCategory> result = service.update(postCategory);
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

