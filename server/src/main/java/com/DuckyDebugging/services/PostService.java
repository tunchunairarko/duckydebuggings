package com.DuckyDebugging.services;


import com.DuckyDebugging.data.PostRepository;
import com.DuckyDebugging.models.Post;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PostService {

    private final PostRepository repository;

    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<Post> findAll() {
        return repository.findAll();
    }

    public Post findById(int accountId) {
        return repository.findById(accountId);
    }

    public List<Post> findPostByUser(int userId) {
        return repository.findPostByUser(userId);
    }

    public Result<Post> add(Post post) {
        Result<Post> result = validate(post);
        if (!result.isSuccess()) {
            return result;
        }

        if (post.getPost_id() != 0) {
            result.addMessage("postId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        post = repository.add(post);
        result.setPayload(post);
        return result;
    }

    public Result<Post> update(Post post) {
        Result<Post> result = validate(post);
        if (!result.isSuccess()) {
            return result;
        }

        if (post.getPost_id() <= 0) {
            result.addMessage("postId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.update(post)) {
            String msg = String.format("PostId: %s, not found", post.getPost_id());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteById(int userAccountId) {
        return repository.deleteById(userAccountId);
    }

    private Result<Post> validate(Post post) {
        Result<Post> result = new Result<>();
        if (post == null) {
            result.addMessage("post cannot be null", ResultType.INVALID);
            return result;
        }

        if (Validations.isNullOrBlank(post.getPost_title())) {
            result.addMessage("title is required", ResultType.INVALID);
        }

        return result;
    }
}


