package ooo.alvar.nutrimenu.apirest.empresa;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Empresa {

  @Id
  private String id;
  private String nombre;
  private String email;
  private String direccion;
  private String telefono;
  private String cif;

  public Empresa() {
  }

  public Empresa(String nombre, String email, String direccion, String telefono, String cif) {
    super();
    this.id = "";
    this.nombre = nombre;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
    this.cif = cif;
  }

  public Empresa(String id, String nombre, String email, String direccion, String telefono, String cif) {
    super();
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
    this.cif = cif;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getDireccion() {
    return direccion;
  }

  public void setDireccion(String direccion) {
    this.direccion = direccion;
  }

  public String getTelefono() {
    return telefono;
  }

  public void setTelefono(String telefono) {
    this.telefono = telefono;
  }

  public String getCif() {
    return cif;
  }

  public void setCif(String cif) {
    this.cif = cif;
  }
}
