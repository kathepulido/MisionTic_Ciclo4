package apirest.springboot.controllers;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import apirest.springboot.models.DueMascotaModel;
import apirest.springboot.services.DueMascotaService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PATCH})
@RequestMapping("/dueMascota")
public class DueMascotaController {
    @Autowired
    DueMascotaService dueMascotaService;

    @GetMapping
    public ArrayList<DueMascotaModel> obtenerDueñoMascotas(){
        return dueMascotaService.obtenerDueñoMascota();
    }
    
    @PostMapping()/*no deja ver la inf en la url*/
    public DueMascotaModel guardarDueñoMascota(@RequestBody DueMascotaModel mascota){
        return dueMascotaService.guardarDueñoMascota(mascota);

    }

    @DeleteMapping(path = "{identificacion}")
    public String eliminarDueMascotaPorId(@PathVariable("identificacion") Long identificacion){
        if(dueMascotaService.eliminarDueñoMascotaPorID(identificacion))
        return "se eliminó dueño de mascota con identificación: " +identificacion;
        else return "No existe dueño de mascota con identificación: "+identificacion;
    }

    @GetMapping(path = "/{identificacion}")
    public Optional<DueMascotaModel> obtenerDueñoMascotaPorId(@PathVariable("identificacion") Long identificacion){
        return this.dueMascotaService.obtenerDueñoMascotaPorID(identificacion);
    }
}
