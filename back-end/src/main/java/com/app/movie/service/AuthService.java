/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.movie.service;

import com.app.movie.dto.AuthResponseDto;
import com.app.movie.entities.Client;
import com.app.movie.dto.AuthDto;
import com.app.movie.repository.ClientRepository;

import java.util.Optional;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    ClientRepository repository;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthResponseDto check(AuthDto request) {
        AuthResponseDto response =new AuthResponseDto();
        if (request.user != null && !request.user.equals("") && request.password != null && !request.password.equals("")) {
            Optional<Client> client = checkCredential(request.user, request.password);
            if (client != null && client.isPresent()) {
                response.id = client.get().getId();
                response.name = client.get().getName() + " " + client.get().getLastName();
                response.email = client.get().getEmail();
                response.token = getToken(request.user, request.password);
            }
        }
        return response;
    }

    private String getToken(String user, String password){
        String tokenString=user+":"+password;
        byte[] bytesEncode=Base64.encodeBase64(tokenString.getBytes());
        return new String(bytesEncode);

    } 
    public Optional<Client> checkCredential(String user, String password) {
        Optional<Client> client = repository.findByEmail(user);

        if(client.isPresent()){
            if (!matchPass(password, client.get().getPassword())) {
                return null;
            }
            return client;
        }
        return null;
    } 


    private Boolean matchPass(String pass,String dbPass){
        return this.passwordEncoder.matches(pass,dbPass);
    }

}


    
