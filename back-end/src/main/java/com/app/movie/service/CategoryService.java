<<<<<<<< HEAD:sprint2/app-streaming/src/main/java/com/streaming/appstreaming/service/CategoryService.java
package com.streaming.appstreaming.service;
========
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.movie.service;

import com.app.movie.dto.ResponseDto;
import com.app.movie.entities.Category;
import com.app.movie.interfaces.ICategoryRepository;
>>>>>>>> 82658319d37a3833ca5bf9df0d6d7226aa713d09:back-end/src/main/java/com/app/movie/service/CategoryService.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<<<<<<<< HEAD:sprint2/app-streaming/src/main/java/com/streaming/appstreaming/service/CategoryService.java
import com.streaming.appstreaming.dto.ResponseDto;
import com.streaming.appstreaming.entities.Category;
import com.streaming.appstreaming.interfaces.ICategoryRepository;

========
/**
 *
 * @author Andres
 */
>>>>>>>> 82658319d37a3833ca5bf9df0d6d7226aa713d09:back-end/src/main/java/com/app/movie/service/CategoryService.java
@Service
public class CategoryService {

    @Autowired
    ICategoryRepository repository;

    public Iterable<Category> get() {
        Iterable<Category> response = repository.findAll();
        return response;
    }

    public ResponseDto create(Category request) {

        Category newCategory = repository.save(request);

        ResponseDto responseDto = new ResponseDto();
        responseDto.status=true;
        responseDto.message="Categoría creada correctamente";
        responseDto.id= newCategory.getId();
        return responseDto;

    }

    public Category update(Category category) {
        Category categoryToUpdate = new Category();
        if (repository.existsById(category.getId())) {
            categoryToUpdate = category;
            repository.save(categoryToUpdate);
        }
        return categoryToUpdate;
    }

    public Boolean delete(String id) {
        repository.deleteById(id);
        Boolean deleted = true;
        return deleted;
    }
}
