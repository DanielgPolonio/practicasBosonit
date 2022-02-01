package com.example.demo;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class Persona {
    private long id;
    private String name;
    private String city;
    private String rol;

    public void setId(long id) {
        this.id = id;
    }
    public Persona(){

    }

    public Persona(long id, String name, String city, String rol) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.rol = rol;
    }

    public String getName() {
        return name;
    }

    public String getCity() {
        return city;
    }

    public String getRol() {
        return rol;
    }

    public long getId() {
        return id;
    }
}
