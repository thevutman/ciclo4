package controller;

import entities.Client;
import interfaces.dto.ReportClientDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import service.ClientService;

@RestController
@RequestMapping("/api/client")
@CrossOrigin(origins = "*")
public class ClientController {
    @Autowired
    ClientService service;

    @GetMapping("")
    public Iterable<Client> get() {
        return service.get();
    }

    @GetMapping("/report")
    public ReportClientDto getReport() {
        return service.getReport();
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Client create(@RequestBody Client request) {
        return service.create(request);
    }

    @PutMapping("")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Client update(@RequestBody Client request) {
        return service.update(request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") String id) {
        service.delete(id);
    }

}
