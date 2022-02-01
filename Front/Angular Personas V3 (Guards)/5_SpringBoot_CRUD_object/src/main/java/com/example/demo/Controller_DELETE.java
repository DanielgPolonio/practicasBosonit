package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

@RestController()
@CrossOrigin(origins= "*")
public class Controller_DELETE {
    @Autowired
    ManagePersonas_Interface managePersonas;

    @RequestMapping(value = "/persona/{id}", method = DELETE)
    @ResponseBody
    public void getId(@PathVariable int id) {
        int IdMatch = managePersonas.getIdMatch(id,managePersonas.getPersonaList());
        if(IdMatch >= 0){
            managePersonas.getPersonaList().remove(IdMatch);
        }
        //return managePersonas.getPersonaList().get(IdMatch);
    }
}
