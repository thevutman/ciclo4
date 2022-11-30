package com.streaming.appstreaming.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.streaming.appstreaming.entities.Movie;
import com.streaming.appstreaming.interfaces.IMovieRepository;

import java.util.Optional;

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
