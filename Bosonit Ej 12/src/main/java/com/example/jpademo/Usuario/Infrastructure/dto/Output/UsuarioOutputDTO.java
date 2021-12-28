package com.example.jpademo.Usuario.Infrastructure.dto.Output;

import com.example.jpademo.Usuario.Domain.Usuario;
import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Component
@Data
public class UsuarioOutputDTO {
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


    public UsuarioOutputDTO() {
    }

    public UsuarioOutputDTO(Usuario usuario) {
        this.setUsuario(usuario.getUsuario());
        this.setPassword(usuario.getPassword());
        this.setName(usuario.getName());
        this.setSurname(usuario.getSurname());
        this.setCompany_email(usuario.getCompany_email());
        this.setPersonal_email(usuario.getPersonal_email());
        this.setCity(usuario.getCity());
        this.setActive(usuario.getActive());
        this.setCreated_date(usuario.getCreated_date());
        this.setImagen_url(usuario.getImagen_url());
        this.setTermination_date(usuario.getTermination_date());

    }

}