package com.DuckyDebugging.services;

import com.DuckyDebugging.data.PostCategoryRepository;
import com.DuckyDebugging.data.UserRoleRepository;
import com.DuckyDebugging.models.PostCategory;
import com.DuckyDebugging.models.UserRole;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PostCategoryService {
    private final PostCategoryRepository postCategoryRepository;

    public PostCategoryService(PostCategoryRepository postCategoryRepository) {
        this.postCategoryRepository = postCategoryRepository;
    }
    public List<PostCategory> findAll(){
        return postCategoryRepository.findAll();
    }


    public PostCategory findById(int id) {
        return postCategoryRepository.findById(id);
    }

    public Result<PostCategory> add(PostCategory postCategory) {
        Result<PostCategory> result = validate(postCategory);
        if (!result.isSuccess()) {
            return result;
        }

        if (postCategory.getPost_category_id() != 0) {
            result.addMessage("Id cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        postCategory = postCategoryRepository.add(postCategory);
        result.setPayload(postCategory);
        return result;
    }

    public Result<PostCategory> update(PostCategory postCategory) {

        Result<PostCategory> result = validate(postCategory);
        if (!result.isSuccess()) {
            return result;
        }

        if (postCategory.getPost_category_id() <= 0) {
            result.addMessage("Id must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (postCategoryRepository.findById(postCategory.getPost_category_id()) == null){
            String msg = String.format("Id: %s, not found", postCategory.getPost_category_id());
            result.addMessage(msg, ResultType.NOT_FOUND);
            return result;
        }

        if (!postCategoryRepository.update(postCategory)) {
            result.addMessage("Invalid", ResultType.INVALID);
            return result;
        }

        return result;
    }

    public boolean deleteById(int id) {
        return postCategoryRepository.deleteById(id);
    }

    private Result<PostCategory> validate(PostCategory postCategory) {
        Result<PostCategory> result = new Result<>();
        if (postCategory == null) {
            result.addMessage("post category name cannot be null", ResultType.INVALID);
            return result;
        }

        if (Validations.isNullOrBlank(postCategory.getPost_category_name())) {
            result.addMessage("post category name is required", ResultType.INVALID);
        }
        return result;
    }
}
