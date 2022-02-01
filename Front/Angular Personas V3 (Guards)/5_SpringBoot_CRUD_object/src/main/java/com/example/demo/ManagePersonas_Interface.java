package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;


public interface ManagePersonas_Interface {
    int getIdMatch(int id, List<Persona> list);
    List<Persona> getNameMatch(String name, List<Persona> list);

    List<Persona> getPersonaList();
    void addPersonaList(Persona Persona);

    long getCountIncrement();

    Persona getPersona();
    void setPersonaName(String name);
    void setPersonaCity(String city);
    void setPersonaRol(String rol);
    void setPersonaID(long id);
}
