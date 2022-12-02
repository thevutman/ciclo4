<<<<<<<< HEAD:sprint2/app-streaming/src/main/java/com/streaming/appstreaming/repository/MovieRepository.java
package com.streaming.appstreaming.repository;

========
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.movie.repository;

// import com.app.movie.entities.Client;
import com.app.movie.entities.Movie;
// import com.app.movie.interfaces.IClientRepository;
import com.app.movie.interfaces.IMovieRepository;
>>>>>>>> 82658319d37a3833ca5bf9df0d6d7226aa713d09:back-end/src/main/java/com/app/movie/repository/MovieRepository.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.streaming.appstreaming.entities.Movie;
import com.streaming.appstreaming.interfaces.IMovieRepository;

import java.util.Optional;

/**
 *
 * @author Andres
 */
@Repository
public class MovieRepository {
    
    @Autowired
    IMovieRepository repository;
    
    public Iterable<Movie> getAll(){
        return repository.findAll();
    }
    
    public Optional<Movie> findById(String id){
        Optional<Movie> response= repository.findById(id);
        return response;
    }
    
    public Boolean existsById(String id){
        return repository.existsById(id);
    }
    
    public void deleteById(String id){
        repository.deleteById(id);
    }
    
    public Movie save(Movie movie){
        return repository.save(movie);
    }
    
}
