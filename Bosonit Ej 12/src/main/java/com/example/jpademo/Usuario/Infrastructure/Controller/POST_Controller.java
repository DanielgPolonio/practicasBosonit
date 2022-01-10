package com.example.jpademo.Usuario.Infrastructure.Controller;

import com.example.jpademo.Usuario.Application.Port.PostUserPort;
import com.example.jpademo.Usuario.Domain.Usuario;
import com.example.jpademo.Usuario.Infrastructure.dto.Input.UsuarioInputDTO;
import com.example.jpademo.Usuario.Infrastructure.dto.Output.UsuarioOutputDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class POST_Controller {
    @Autowired
    PostUserPort postUserPort;

    @PostMapping
    public UsuarioOutputDTO insert(@RequestBody UsuarioInputDTO usuarioInputDTO) throws Exception {
        Usuario usuario = usuarioInputDTO.Change(usuarioInputDTO);
        postUserPort.AddUser(usuario);
        return new UsuarioOutputDTO(usuario);
    }

}
