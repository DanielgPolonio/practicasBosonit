package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController()
@CrossOrigin(origins= "*")
public class Controller_GET {
    @Autowired
    ManagePersonas_Interface managePersonas;
    @RequestMapping(value = "/persona/{id}", method = GET)
    public Persona getPersona(@PathVariable int id) {
        int IdMatch = managePersonas.getIdMatch(id,managePersonas.getPersonaList());
        if(IdMatch >= 0){
            return managePersonas.getPersonaList().get(IdMatch);
        }
        return null;
    }

    @RequestMapping(value = "/personas", method = GET)
    public List<Persona> getAllPersonas() {
            return managePersonas.getPersonaList();
        }
    @RequestMapping(value = "/persona/nombre/{name}", method = GET)
    public List<Persona> getPersona(@PathVariable String name) {
        return managePersonas.getNameMatch(name,managePersonas.getPersonaList());
    }


}
