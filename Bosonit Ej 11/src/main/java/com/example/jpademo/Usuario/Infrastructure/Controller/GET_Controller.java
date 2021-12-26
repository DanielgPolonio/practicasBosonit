package com.example.jpademo.Usuario.Infrastructure.Controller;

import com.example.jpademo.Usuario.Domain.Usuario;
import com.example.jpademo.Usuario.Domain.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GET_Controller {
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    @GetMapping
    public List<Usuario> getAll(){
        return usuarioRepositorio.findAll();
    }

    @GetMapping("/id/{id}")

    public Usuario getById(@PathVariable int id) throws Exception{
        return usuarioRepositorio.findById(id).orElseThrow(() -> new Exception("No se encuentra"));
    }

    @GetMapping("name/{name}")
    public List<Usuario> getByName(@PathVariable String name){
        return usuarioRepositorio.findByName(name);
    }
}