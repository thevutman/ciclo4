/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.movie.repository;

import com.app.movie.entities.Movie;
import com.app.movie.entities.Series;
import com.app.movie.interfaces.ISeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public class SeriesRepository {

    @Autowired
    ISeriesRepository repository;

    public Iterable<Series> getAll(){
        return repository.findAll();
    }

    public Optional<Series> findById(String id){
        Optional<Series> response= repository.findById(id);
        return response;
    }

    public List<Series> findByName(String name){
        List<Series> response= repository.findByName(name);
        return response;
    }

    public Boolean existsById(String id){
        return repository.existsById(id);
    }

    public void deleteById(String id){
        repository.deleteById(id);
    }

    public Series save(Series series){
        return repository.save(series);
    }

}
