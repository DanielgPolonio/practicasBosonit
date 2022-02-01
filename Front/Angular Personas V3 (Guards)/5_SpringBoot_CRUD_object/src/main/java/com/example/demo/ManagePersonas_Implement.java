package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Service
public class ManagePersonas_Implement implements ManagePersonas_Interface{
    @Autowired
    Persona Persona;

    private final AtomicLong counter = new AtomicLong();
    private List<Persona> listaPersonas = new ArrayList<>();

    @Override
    public int getIdMatch(int id, List<Persona> list) {
        //list.stream().filter(p -> p.getId() == id);
        for(int i = 0; i < list.size(); i++){
            long PersonaId = list.get(i).getId();
            if(PersonaId == id){
                return i;
            }
        }
        return -1;
    }

    @Override
    public List<Persona> getNameMatch(String name, List<Persona> list) {
        return list.stream().filter(p -> p.getName().equalsIgnoreCase(name)).collect(Collectors.toList());
        /*
        List<Persona> tempMatch = new ArrayList<>();

        for(int i = 0; i < list.size(); i++){
            if(list.get(i).getName().equals(name)){
                tempMatch.add(list.get(i));
            }
        }
        return tempMatch;
        */
    }

    @Override
    public List<Persona> getPersonaList() {
        return listaPersonas;
    }

    @Override
    public void addPersonaList(Persona Persona) {
        listaPersonas.add(Persona);

    }

    @Override
    public long getCountIncrement() {
        return counter.getAndIncrement();
    }

    @Override
    public Persona getPersona() {
        return Persona;
    }

    @Override
    public void setPersonaName(String name) {
        Persona.setName(name);

    }

    @Override
    public void setPersonaCity(String city) {
        Persona.setCity(city);
    }

    @Override
    public void setPersonaRol(String rol) {
        Persona.setRol(rol);

    }

    @Override
    public void setPersonaID(long id) {
        Persona.setId(id);

    }
}
