package com.streaming.appstreaming.interfaces;

import org.springframework.data.repository.CrudRepository;

import com.streaming.appstreaming.entities.Movie;

public interface IMovieRepository extends CrudRepository<Movie, String> {
}
