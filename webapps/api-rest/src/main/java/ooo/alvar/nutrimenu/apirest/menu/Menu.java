package ooo.alvar.nutrimenu.apirest.menu;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;

import java.time.Instant;

@Entity
public class Menu {

  @Id
  private String id;
  @ManyToOne
  private Empresa empresa;
  private String nombre;
  private String descripcion;
  private Instant fechaCreacion;
  private Instant fechaModificacion;

  public Menu() {
  }

  public Menu(String idEmpresa, String nombre, String descripcion) {
    super();
    this.empresa = new Empresa(idEmpresa, "", "", "", "", "");
    this.nombre = nombre;
    this.descripcion = descripcion;
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

  public String getDescripcion() {
    return descripcion;
  }

  public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
  }

  public Instant getFechaCreacion() {
    return fechaCreacion;
  }

  public void setFechaCreacion(Instant fecha_creacion) {
    this.fechaCreacion = fecha_creacion;
  }

  public Instant getFechaModificacion() {
    return fechaModificacion;
  }

  public void setFechaModificacion(Instant fecha_modificacion) {
    this.fechaModificacion = fecha_modificacion;
  }
}
