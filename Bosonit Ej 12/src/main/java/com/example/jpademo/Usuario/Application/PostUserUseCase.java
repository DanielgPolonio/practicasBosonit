package com.example.jpademo.Usuario.Application;

import com.example.jpademo.Usuario.Application.Port.PostUserPort;
import com.example.jpademo.Usuario.Domain.Usuario;

import com.example.jpademo.Usuario.Domain.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class PostUserUseCase implements PostUserPort {
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    public Usuario AddUser(Usuario usuario) throws Exception{
        if (usuario.getUsuario()==null) {
            throw new Exception("El usuario no puede ser nulo");
        }
        if (usuario.getUsuario().length()>10) {
            throw new Exception("El nombre de usuario no puede ser superior a 10 caracteres");
        }
        if (usuario.getPassword()==null) {
            throw new Exception("La contraseña no puede ser nula");
        }
        if (usuario.getName()==null) {
            throw new Exception("El nombre no puede ser nulo");
        }
        if (usuario.getCompany_email()==null) {
            throw new Exception("El E-Mail no puede ser nulo");
        }
        if (usuario.getCity()==null) {
            throw new Exception("La ciudad no puede ser nula");
        }
        if (usuario.getActive()==null) {
            throw new Exception("Activo no puede ser nulo");
        }
        if (usuario.getCreated_date()==null) {
            throw new Exception("La fecha de creación no puede ser nula");
        }
        if (usuario.getPersonal_email()==null) {
            throw new Exception("El E-Mail personal no puede ser nulo");
        }

        usuarioRepositorio.save(usuario);
        return usuario;
    }


}
