package ooo.alvar.nutrimenu.apirest.plato;

import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;

import java.time.Instant;

@Entity
public class Plato {
  @Id
  private String id;
  @ManyToOne
  private Empresa empresa;
  @Enumerated(EnumType.STRING)
  private tipoPlato tipoPlato;
  private String nombre;
  private Instant fechaCreacion;
  private Instant fechaModificacion;

  public Plato() {
  }

  public Plato(String idEmpresa, String nombre, tipoPlato tipoPlato) {
    super();
    this.empresa = new Empresa(idEmpresa, "", "", "", "", "");
    this.nombre = nombre;
    this.tipoPlato = tipoPlato;
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

  public ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato getTipoPlato() {
    return tipoPlato;
  }

  public void setTipoPlato(ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato tipoPlato) {
    this.tipoPlato = tipoPlato;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public Instant getFechaCreacion() {
    return fechaCreacion;
  }

  public void setFechaCreacion(Instant fechaCreacion) {
    this.fechaCreacion = fechaCreacion;
  }

  public Instant getFechaModificacion() {
    return fechaModificacion;
  }

  public void setFechaModificacion(Instant fechaModificacion) {
    this.fechaModificacion = fechaModificacion;
  }
}
