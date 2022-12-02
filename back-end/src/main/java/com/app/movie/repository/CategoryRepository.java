<<<<<<<< HEAD:sprint2/app-streaming/src/main/java/com/streaming/appstreaming/repository/CategoryRepository.java
package com.streaming.appstreaming.repository;
========
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.movie.repository;
>>>>>>>> 82658319d37a3833ca5bf9df0d6d7226aa713d09:back-end/src/main/java/com/app/movie/repository/CategoryRepository.java

import com.app.movie.entities.Category;
import com.app.movie.interfaces.ICategoryRepository;

<<<<<<<< HEAD:sprint2/app-streaming/src/main/java/com/streaming/appstreaming/repository/CategoryRepository.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.streaming.appstreaming.entities.Category;
import com.streaming.appstreaming.interfaces.ICategoryRepository;

import java.util.Optional;

========
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Andres
 */
>>>>>>>> 82658319d37a3833ca5bf9df0d6d7226aa713d09:back-end/src/main/java/com/app/movie/repository/CategoryRepository.java
@Repository
public class CategoryRepository {
    
    @Autowired
    ICategoryRepository repository;
    
    public Iterable<Category> getAll(){
        return repository.findAll();
    }
    
    public Optional<Category> findById(String id){
        Optional<Category> response= repository.findById(id);
        return response;
    }
    
    public Boolean existsById(String id){
        return repository.existsById(id);
    }
    
    public void deleteById(String id){
        repository.deleteById(id);
    }
    
    public Category save(Category category){
        return repository.save(category);
    }
    
}
