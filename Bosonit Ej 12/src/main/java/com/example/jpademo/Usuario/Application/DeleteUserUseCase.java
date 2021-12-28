package com.example.jpademo.Usuario.Application;

import com.example.jpademo.Usuario.Application.Port.DeleteUserPort;
import com.example.jpademo.Usuario.Domain.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class DeleteUserUseCase implements DeleteUserPort {
    @Autowired
    UsuarioRepositorio usuarioRepositorio;


    @Override
    public void deleteUserById(int id) throws Exception {
        if(usuarioRepositorio.findById(id).isPresent()){
            usuarioRepositorio.deleteById(id);
        }
    }
}
