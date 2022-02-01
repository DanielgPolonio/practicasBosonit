package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController()
@CrossOrigin(origins= "*")
public class Controller_POST {
    @Autowired
    ManagePersonas_Interface managePersonas;

    @RequestMapping(value = "/persona", method = POST)
    @ResponseBody
    public Persona add(@RequestBody Persona Persona) {
        managePersonas.setPersonaID(managePersonas.getCountIncrement()+1);
        managePersonas.setPersonaName(Persona.getName());
        managePersonas.setPersonaCity(Persona.getCity());
        managePersonas.setPersonaRol(Persona.getRol());
        managePersonas.addPersonaList(new Persona(managePersonas.getPersona().getId(),Persona.getName(),Persona.getCity(),Persona.getRol()));
        return  managePersonas.getPersona();
    }
}
