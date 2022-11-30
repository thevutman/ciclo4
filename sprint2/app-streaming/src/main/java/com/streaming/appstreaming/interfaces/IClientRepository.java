package com.streaming.appstreaming.interfaces;


import org.springframework.data.repository.CrudRepository;

import com.streaming.appstreaming.entities.Client;

public interface IClientRepository extends CrudRepository<Client, String> {
}
