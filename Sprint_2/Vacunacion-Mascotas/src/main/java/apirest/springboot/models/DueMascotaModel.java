package apirest.springboot.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("dueñoMascota")
public class DueMascotaModel {
    
    @Id
    private Long identificacion;
    private String nombre;
    private String telefono;
    private String direccion;
    private String correo;
    public DueMascotaModel() {
    }
    public DueMascotaModel(Long identificacion, String nombre, String telefono, String direccion, String correo) {
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
    }
    public Long getIdentificacion() {
        return identificacion;
    }
    public void setIdentificacion(Long identificacion) {
        this.identificacion = identificacion;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public String getCorreo() {
        return correo;
    }
    public void setCorreo(String correo) {
        this.correo = correo;
    }
    
    
}
