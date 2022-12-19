/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.app.movie.interfaces;

import com.app.movie.entities.Score;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface IScoreRepository extends CrudRepository<Score, String> {
    @Query(value= "{$and:[{'movie.id' : ?0},{'client.id':?1}]}") // SQL Equivalent : SELECT * FROM Movie select * from Movie where name=?
    List<Score> getScoreByMovieAndClient(String movieId, String clientId);
}


