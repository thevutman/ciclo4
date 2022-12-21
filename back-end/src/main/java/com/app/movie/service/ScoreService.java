/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.movie.service;

import com.app.movie.dto.ResponseDto;
import com.app.movie.dto.ScoreDto;
import com.app.movie.entities.Client;
import com.app.movie.entities.Movie;
import com.app.movie.entities.Score;
import com.app.movie.repository.ClientRepository;
import com.app.movie.repository.MovieRepository;
import com.app.movie.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ScoreService {

    @Autowired
    ScoreRepository repository;
    @Autowired
    ClientRepository clientRepository;
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    ClientService clientService;

    public Iterable<Score> get() {
        Iterable<Score> response = repository.getAll();
        return response;
    }

    public ResponseDto create(ScoreDto request, String authorization) {
        ResponseDto response = new ResponseDto();
        Score score = new Score();
        System.out.println(request.state);
        Optional<Movie>movie = movieRepository.findById(request.movieId);
        System.out.println(33);
        Optional<Client>client = clientService.getByCredential(authorization);
        System.out.println(22);
        if (movie.isPresent()&& client.isPresent()){
            score.setState(true);
            score.setClient(client.get());
            score.setMovie(movie.get());
            repository.save(score);
            response.status=true;
        }
        return response;

    }

    // public Boolean check(String movieId,String authorization) {
    //     Boolean auth = true;
    //     Optional<Movie> movie = movieRepository.findById(movieId);
    //     Optional<Client> client = clientService.getByCredential(authorization);
    //     if(movie.isPresent() && client.isPresent()){
    //         List<Score> scores = repository.findByMovieAndClient(movie.get().getId(),client.get().getId());
    //         System.out.print(1);
    //         System.out.print(scores.isEmpty());
    //         if(scores.isEmpty()){
    //             // score = scores.get(scores.size()-1);
    //             auth = false;
    //         }
    //     }
 
    //     return auth;
    // }

    public Score check(String movieId,String authorization) {
        Score score = new Score();
        // Boolean auth = true;
        Optional<Movie> movie = movieRepository.findById(movieId);
        Optional<Client> client = clientService.getByCredential(authorization);
        if(movie.isPresent() && client.isPresent()){
            List<Score> scores = repository.findByMovieAndClient(movie.get().getId(),client.get().getId());
            System.out.print(1);
            System.out.print(scores.isEmpty());
            if(scores.size()>0){
                score = scores.get(scores.size()-1);
                // auth = false;
            }
        }
 
        return score;
    }

    public Score update(Score score) {
        Score scoreToUpdate = new Score();

        Optional<Score> currentScore = repository.findById(score.getId());
        if (!currentScore.isEmpty()) {
            scoreToUpdate = score;
            scoreToUpdate=repository.save(scoreToUpdate);
        }
        return scoreToUpdate;
    }

    public Boolean delete(String id) {
        repository.deleteById(id);
        Boolean deleted = true;
        return deleted;
    }
}
