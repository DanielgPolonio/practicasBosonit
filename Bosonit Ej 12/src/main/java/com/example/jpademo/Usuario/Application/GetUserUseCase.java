package com.example.jpademo.Usuario.Application;

import com.example.jpademo.NotFoundException;
import com.example.jpademo.Usuario.Application.Port.GetUserPort;
import com.example.jpademo.Usuario.Domain.Usuario;
import com.example.jpademo.Usuario.Domain.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class GetUserUseCase implements GetUserPort {
    @Autowired
    UsuarioRepositorio usuarioRepositorio;


    public List<Usuario> getAllUsers(){
        return usuarioRepositorio.findAll();
    }

    @Override
    public Usuario getUserById(int id) throws NotFoundException {
        if(usuarioRepositorio.findById(id).isPresent()){
            return usuarioRepositorio.findById(id).get();
        }else {
            throw new NotFoundException("La id "+id+" no se encuentra.");
        }
    }

    @Override
    public List<Usuario> getUserByName(String name) {
        return usuarioRepositorio.findByName(name);
    }
}
