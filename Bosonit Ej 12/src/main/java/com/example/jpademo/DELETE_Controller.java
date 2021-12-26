package com.example.jpademo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;

@RestController
public class DELETE_Controller {
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    @DeleteMapping("/delete/{id}")
    public void deleteUserById(@PathVariable int id) throws Exception {
        if(usuarioRepositorio.findById(id).isPresent()){
            usuarioRepositorio.deleteById(id);
        }
    }
}
