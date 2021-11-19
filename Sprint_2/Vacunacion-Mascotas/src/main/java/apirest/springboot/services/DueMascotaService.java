package apirest.springboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import apirest.springboot.models.DueMascotaModel;
import apirest.springboot.repositories.DueMascotaRepository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class DueMascotaService {
    @Autowired
    DueMascotaRepository vacMascotaRepository;

    public ArrayList <DueMascotaModel> obtenerDueñoMascota(){
        return (ArrayList <DueMascotaModel>) vacMascotaRepository.findAll();
    }

    public DueMascotaModel guardarDueñoMascota(DueMascotaModel cliente){
        return vacMascotaRepository.save(cliente); /*guardar en BD*/
    }

    public boolean eliminarDueñoMascotaPorID(Long identificacion){
        if(vacMascotaRepository.existsById(identificacion)){
            vacMascotaRepository.deleteById(identificacion);
            return true;
        }else return false;
    }

    public Optional<DueMascotaModel> obtenerDueñoMascotaPorID(Long identificacion){
        return vacMascotaRepository.findById(identificacion);
    }
    
}
