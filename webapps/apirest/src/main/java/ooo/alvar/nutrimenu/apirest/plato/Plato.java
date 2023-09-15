package ooo.alvar.nutrimenu.apirest.plato;

import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;

import java.time.Instant;

@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"nombre", "empresa_id"})
      })
public class Plato {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private tipoPlato tipoPlato;
  @Column(nullable = false)
  private String nombre;
  private String descripcion;
  private Instant fechaCreacion;
  private Instant fechaModificacion;
  @ManyToOne
  @JoinColumn(name = "empresa_id")
  private Empresa empresa;

  public Plato() {
  }

  public Plato(String nombre, String descripcion, tipoPlato tipoPlato, Empresa empresa) {
    super();
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipoPlato = tipoPlato;
    this.empresa = empresa;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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

  public String getDescripcion() {
    return descripcion;
  }

  public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
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

  public Empresa getEmpresa() {
    return empresa;
  }

  public void setEmpresa(Empresa empresa) {
    this.empresa = empresa;
  }
}
