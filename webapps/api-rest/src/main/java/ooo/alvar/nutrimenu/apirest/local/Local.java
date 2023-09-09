package ooo.alvar.nutrimenu.apirest.local;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import ooo.alvar.nutrimenu.apirest.empresa.*;

@Entity
public class Local {

  @Id
  private String id;
  @ManyToOne
  private Empresa empresa;
  private String nombre;
  private String email;
  private String direccion;
  private String telefono;

  public Local() {
  }
  public Local(String idEmpresa, String nombre, String email, String direccion, String telefono) {
    super();
    this.id = "";
    this.empresa = new Empresa(idEmpresa, "", "", "", "", "");
    this.nombre = nombre;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Empresa getEmpresa() {
    return empresa;
  }

  public void setEmpresa(Empresa empresa) {
    this.empresa = empresa;
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
}
