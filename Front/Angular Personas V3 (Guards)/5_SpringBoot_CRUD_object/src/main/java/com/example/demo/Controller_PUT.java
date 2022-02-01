package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.PUT;

@RestController()
@CrossOrigin(origins= "*")
public class Controller_PUT {
    @Autowired
    ManagePersonas_Interface managePersonas;

    @RequestMapping(value = "/persona/{id}", method = PUT)
    @ResponseBody
    public void getId(@RequestBody Persona Persona,@PathVariable int id) {
        Persona.setId(id);
        int IdMatch = managePersonas.getIdMatch(id,managePersonas.getPersonaList());
        if(IdMatch >= 0){
            if (Persona.getName() != null) {
                managePersonas.getPersonaList().get(IdMatch).setName(Persona.getName());
            }
            if (Persona.getCity() != null) {
                managePersonas.getPersonaList().get(IdMatch).setCity(Persona.getCity());
            }
            if (Persona.getRol() != null) {
                managePersonas.getPersonaList().get(IdMatch).setRol(Persona.getRol());
            }
        }
    }
}
