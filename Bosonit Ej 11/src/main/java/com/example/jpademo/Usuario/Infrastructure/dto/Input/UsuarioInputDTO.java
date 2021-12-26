package com.example.jpademo.Usuario.Infrastructure.dto.Input;

import com.example.jpademo.Usuario.Domain.Usuario;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
public class UsuarioInputDTO {
    @Id
    @GeneratedValue
    private int id;

    private String usuario;
    private String password;
    private String name;
    private String surname;
    private String company_email;
    private String personal_email;
    private String city;
    private Boolean active;
    private Date created_date;
    private String imagen_url;
    private Date termination_date;


    public UsuarioInputDTO() {
    }

    public Usuario Change(UsuarioInputDTO usuarioInputDTO) {
        Usuario usuario = new Usuario();
        usuario.setUsuario(usuarioInputDTO.getUsuario());
        usuario.setPassword(usuarioInputDTO.getPassword());
        usuario.setName(usuarioInputDTO.getName());
        usuario.setSurname(usuarioInputDTO.getSurname());
        usuario.setCompany_email(usuarioInputDTO.getCompany_email());
        usuario.setPersonal_email(usuarioInputDTO.getPersonal_email());
        usuario.setCity(usuarioInputDTO.getCity());
        usuario.setActive(usuarioInputDTO.getActive());
        usuario.setCreated_date(usuarioInputDTO.getCreated_date());
        usuario.setImagen_url(usuarioInputDTO.getImagen_url());
        usuario.setTermination_date(usuarioInputDTO.getTermination_date());

        return usuario;
    }
}