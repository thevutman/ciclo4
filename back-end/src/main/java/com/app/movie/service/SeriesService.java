/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.movie.service;

import com.app.movie.entities.Movie;
import com.app.movie.entities.Series;
import com.app.movie.repository.MovieRepository;
import com.app.movie.repository.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class SeriesService {

    @Autowired
    SeriesRepository repository;

    public Iterable<Series> get() {
        Iterable<Series> response = repository.getAll();
        return response;
    }

    public Series create(Series request) {

        return repository.save(request);

    }

    public Series update(Series series) {
        Series seriesToUpdate = new Series();

        Optional<Series> currentSeries = repository.findById(series.getId());
        if (!currentSeries.isEmpty()) {
            seriesToUpdate = series;
            seriesToUpdate=repository.save(seriesToUpdate);
        }
        return seriesToUpdate;
    }

    public Boolean delete(String id) {
        repository.deleteById(id);
        Boolean deleted = true;
        return deleted;
    }
}
