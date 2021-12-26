package com.example.jpademo.Usuario.Infrastructure.Controller;

import com.example.jpademo.Usuario.Domain.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DELETE_Controller {
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable int id) throws Exception {
        if(usuarioRepositorio.findById(id).isPresent()){
            usuarioRepositorio.deleteById(id);
        }
    }
}
