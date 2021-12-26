package com.example.jpademo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PUT_Controller {
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    @PutMapping("/put/id/{id}")
    public Usuario update(@PathVariable int id, @RequestBody Usuario usuario) throws Exception {
        if(usuarioRepositorio.findById(id).isPresent())
        {
            if(usuario.getUsuario().length()>=6 && usuario.getUsuario().length()<=10 && usuario.getUsuario() != null){
                usuario.setId(id);
                usuarioRepositorio.save(usuario);
                return usuario;
            }
            else{
                throw new Exception("Ha habido algún error con los datos introducidos. Asegurese de que el usuario contiene entre 6 y 10 caracteres");
            }
        }else{
            throw new Exception("La id introducida no es correcta");
        }
    }
}
