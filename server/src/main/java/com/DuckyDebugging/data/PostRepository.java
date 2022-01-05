package com.DuckyDebugging.data;

import com.DuckyDebugging.models.Post;
import com.DuckyDebugging.models.PostCategory;
import com.DuckyDebugging.models.UserRole;

import java.util.List;

public interface PostRepository {
    List<Post> findAll();

    Post findById(int id);
    PostCategory findByName(String name);
    Post add(Post post);

    boolean update(Post post);

    boolean deleteById(int id);
}
