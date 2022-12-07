/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.movie.service;

import com.app.movie.dto.ReportSeriesDto;
import com.app.movie.dto.ResponseDto;
import com.app.movie.entities.Series;
import com.app.movie.repository.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class SeriesService {

    @Autowired
    SeriesRepository repository;

    public Iterable<Series> get() {
        Iterable<Series> response = repository.getAll();
        return response;
    }

    public ReportSeriesDto getReport() {
        Optional<Series> series = repository.findById("6380442df71ad74770fc57e1");
        ReportSeriesDto reportSeriesDto= new ReportSeriesDto();
        reportSeriesDto.classification=series.get().getClassification();
        reportSeriesDto.name=series.get().getName();
        reportSeriesDto.id=series.get().getId();
        return reportSeriesDto;
    }

    public ResponseDto create(Series request) {
        ResponseDto response = new ResponseDto();
        List<Series> series = repository.findByName(request.getName());
        if(series.size()>0){
            response.status=false;
            response.message="LA SERIE YA SE ENCUENTRA REGISTRADO";
        }else{
            repository.save(request);
            response.status=true;
            response.message="REGISTRADA EXITOSAMENTE";
            response.id= request.getId();
        }
        return response;
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
