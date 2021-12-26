package com.example.jpademo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;


import java.util.List;

@RestController
public class GET_Controller {
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    @GetMapping
    public List<Usuario> getAllUsers(){
        return usuarioRepositorio.findAll();
    }

    @GetMapping("/id/{id}")

    public Usuario getUserById(@PathVariable int id) throws NotFoundException {
        if (usuarioRepositorio.findById(id).isPresent()){
            return usuarioRepositorio.findById(id).get();
        }
        else{
            throw new NotFoundException("La id "+id+" no es correcta, por favor, introduzca una id válida.");
        }
    }

    @GetMapping("name/{name}")
    public List<Usuario> getUserByName(@PathVariable String name){
        return usuarioRepositorio.findByName(name);
    }
}