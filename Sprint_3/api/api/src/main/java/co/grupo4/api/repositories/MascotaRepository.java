package co.grupo4.api.repositories;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.grupo4.api.models.MascotaModel;

public interface MascotaRepository extends MongoRepository<MascotaModel, String> {

    ArrayList<MascotaModel>findByNombre (String nombre);
    
}
