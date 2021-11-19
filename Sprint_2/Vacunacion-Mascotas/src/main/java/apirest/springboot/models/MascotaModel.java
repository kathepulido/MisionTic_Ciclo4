package apirest.springboot.models;

public class MascotaModel {
    
    public String tipo;
    public String nombre;
    public String raza;
    public String fechNacimiento;
    public String esqVacunación;
    public String estado;

    public MascotaModel() {
    }

    public MascotaModel(String tipo, String nombre, String raza, String fechNacimiento, String esqVacunación,
            String estado) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.raza = raza;
        this.fechNacimiento = fechNacimiento;
        this.esqVacunación = esqVacunación;
        this.estado = estado;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRaza() {
        return raza;
    }

    public void setRaza(String raza) {
        this.raza = raza;
    }

    public String getFechNacimiento() {
        return fechNacimiento;
    }

    public void setFechNacimiento(String fechNacimiento) {
        this.fechNacimiento = fechNacimiento;
    }

    public String getEsqVacunación() {
        return esqVacunación;
    }

    public void setEsqVacunación(String esqVacunación) {
        this.esqVacunación = esqVacunación;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

        
}

