package com.example.jpademo.Usuario.Application.Port;

import com.example.jpademo.Usuario.Domain.Usuario;

import java.util.List;

public interface GetUserPort {
    public List<Usuario> getAllUsers();
    public Usuario getUserById(int id) throws Exception;
    public List<Usuario> getUserByName(String name);
}
