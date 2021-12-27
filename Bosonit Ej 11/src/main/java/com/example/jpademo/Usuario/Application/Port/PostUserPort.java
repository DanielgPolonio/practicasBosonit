package com.example.jpademo.Usuario.Application.Port;

import com.example.jpademo.Usuario.Domain.Usuario;

public interface PostUserPort {
        public Usuario AddUser(Usuario usuario) throws Exception;
}
