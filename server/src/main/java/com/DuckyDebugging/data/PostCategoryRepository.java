package com.DuckyDebugging.data;

import com.DuckyDebugging.models.PostCategory;
import com.DuckyDebugging.models.UserRole;

import java.util.List;

public interface PostCategoryRepository {
    List<PostCategory> findAll();

    PostCategory findById(int id);
    PostCategory findByName(String name);
    PostCategory add(PostCategory postCategory);

    boolean update(PostCategory postCategory);

    boolean deleteById(int id);
}
