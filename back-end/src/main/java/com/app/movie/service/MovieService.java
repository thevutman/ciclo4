/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.movie.service;

import com.app.movie.dto.ReportMovieDto;
import com.app.movie.dto.ResponseDto;
import com.app.movie.entities.Movie;
import com.app.movie.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MovieService {

    @Autowired
    MovieRepository repository;

    public Iterable<Movie> get() {
        Iterable<Movie> response = repository.getAll();
        return response;
    }

    public ReportMovieDto getReport() {
        Optional<Movie> movie = repository.findById("6380442df71ad74770fc57e1");
        ReportMovieDto reportMovieDto= new ReportMovieDto();
        reportMovieDto.name=movie.get().getName();
        reportMovieDto.id=movie.get().getId();
        return reportMovieDto;
    }

    public ResponseDto create(Movie request) {
        ResponseDto response = new ResponseDto();
        List<Movie> movie = repository.findByName(request.getName());
        if(movie.size()>0){
            response.status=false;
            response.message="LA PELICULA YA SE ENCUENTRA REGISTRADA";
        }else{
            repository.save(request);
            response.status=true;
            response.message="REGISTRADA EXITOSAMENTE";
            response.id= request.getId();
        }
        return response;
    }

    public Movie update(Movie movie) {
        Movie movieToUpdate = new Movie();

        Optional<Movie> currentMovie = repository.findById(movie.getId());
        if (!currentMovie.isEmpty()) {
            movieToUpdate = movie;
            movieToUpdate=repository.save(movieToUpdate);
        }
        return movieToUpdate;
    }

    public Boolean delete(String id) {
        repository.deleteById(id);
        Boolean deleted = true;
        return deleted;
    }
}
