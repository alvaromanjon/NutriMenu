package ooo.alvar.nutrimenu.apirest.menu;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.local.Local;
import ooo.alvar.nutrimenu.apirest.plato.Plato;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Menu {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false)
  private String nombre;
  private String descripcion;
  private Instant fechaCreacion;
  private Instant fechaModificacion;
  @JsonIgnore
  @ManyToOne
  @JoinColumn(name = "local_id")
  private Local local;
  @ManyToMany
  @JoinTable(
    name = "menu_plato",
    joinColumns = @JoinColumn(name = "menu_id"),
    inverseJoinColumns = @JoinColumn(name = "plato_id")
  )
  private List<Plato> platos = new ArrayList<>();

  public Menu() {
  }

  public Menu(String nombre, String descripcion, Local local) {
    super();
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.local = local;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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

  public Local getLocal() {
    return local;
  }

  public void setLocal(Local local) {
    this.local = local;
  }

  public List<Plato> getPlatos() {
    return platos;
  }

  public void setPlatos(List<Plato> platos) {
    this.platos = platos;
  }
}
