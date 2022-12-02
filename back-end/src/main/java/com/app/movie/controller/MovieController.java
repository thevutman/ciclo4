<<<<<<<< HEAD:sprint2/app-streaming/src/main/java/com/streaming/appstreaming/controller/MovieController.java
package com.streaming.appstreaming.controller;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.streaming.appstreaming.entities.Movie;
import com.streaming.appstreaming.service.MovieService;
========
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.movie.controller;

// import com.app.movie.entities.Client;
import com.app.movie.entities.Movie;
// import com.app.movie.service.ClientService;
import com.app.movie.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
>>>>>>>> 82658319d37a3833ca5bf9df0d6d7226aa713d09:back-end/src/main/java/com/app/movie/controller/MovieController.java

/**
 *
 * @author Andres
 */
@RestController
@RequestMapping("/api/movie")
@CrossOrigin(origins = "*")
<<<<<<<< HEAD:sprint2/app-streaming/src/main/java/com/streaming/appstreaming/controller/MovieController.java
public class MovieController implements Serializable{
========
public class MovieController {

>>>>>>>> 82658319d37a3833ca5bf9df0d6d7226aa713d09:back-end/src/main/java/com/app/movie/controller/MovieController.java
    @Autowired
    MovieService service;

    @GetMapping("")
    public Iterable<Movie> get() {
        return service.get();
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Movie create(@RequestBody Movie request) {
        return service.create(request);
    }

    @PutMapping("")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Movie update(@RequestBody Movie request) {
        return service.update(request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") String id) {
        service.delete(id);
    }

}
