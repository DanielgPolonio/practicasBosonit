package com.example.jpademo.Usuario.Application;

import com.example.jpademo.Usuario.Infrastructure.dto.Output.UsuarioOutputDTO;
import com.example.jpademo.Usuario.Infrastructure.dto.Input.UsuarioInputDTO;


import java.util.List;

public interface UsuarioServiceInterface {
    UsuarioOutputDTO getUserById(int id) throws Exception; //GET1
    List<UsuarioOutputDTO> getUserByName(String name) throws Exception; //GET2
    List<UsuarioOutputDTO> getAllUsers() throws Exception; //GET3
    UsuarioOutputDTO insert(UsuarioInputDTO usuario) throws Exception; //POST
    UsuarioOutputDTO update(UsuarioInputDTO usuario, int id) throws Exception; //PUT
    void deleteUserById(long id) throws Exception; //DELETE
}
