package apirest.springboot.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import apirest.springboot.models.DueMascotaModel;

public interface DueMascotaRepository extends MongoRepository <DueMascotaModel, Long> {
    
}
