package com.example.jpademo.Usuario.Application.Port;

import com.example.jpademo.NotFoundException;
import com.example.jpademo.Usuario.Domain.Usuario;

import java.util.List;

public interface GetUserPort {
    public List<Usuario> getAllUsers();
    public Usuario getUserById(int id)  throws NotFoundException;
    public List<Usuario> getUserByName(String name);
}
