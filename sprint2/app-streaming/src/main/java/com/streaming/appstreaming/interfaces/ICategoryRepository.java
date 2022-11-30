package com.streaming.appstreaming.interfaces;

import org.springframework.data.repository.CrudRepository;

import com.streaming.appstreaming.entities.Category;

public interface ICategoryRepository extends CrudRepository<Category, String> {
}
