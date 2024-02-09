package ooo.alvar.nutrimenu.apirest.menu;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.local.Local;
import ooo.alvar.nutrimenu.apirest.plato.Plato;
import java.time.Instant;
import java.time.LocalDate;
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
  private LocalDate fechaCreacion;
  private LocalDate fechaPublicacion;
  @JsonIgnore
  @ManyToOne
  @JoinColumn(name = "empresa_id")
  private Empresa empresa;
  @ManyToMany
  @JoinTable(
      name = "menu_local",
      joinColumns = @JoinColumn(name = "menu_id"),
      inverseJoinColumns = @JoinColumn(name = "local_id"))
  private List<Local> locales = new ArrayList<>();
  @ManyToMany
  @JoinTable(
      name = "menu_plato",
      joinColumns = @JoinColumn(name = "menu_id"),
      inverseJoinColumns = @JoinColumn(name = "plato_id"))
  private List<Plato> platos = new ArrayList<>();

  public Menu() {
  }

  public Menu(String nombre, String descripcion, LocalDate fechaPublicacion, Empresa empresa) {
    super();
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaPublicacion = fechaPublicacion;
    this.empresa = empresa;
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

  public LocalDate getFechaCreacion() {
    return fechaCreacion;
  }

  public void setFechaCreacion(LocalDate fechaCreacion) {
    this.fechaCreacion = fechaCreacion;
  }

  public LocalDate getFechaPublicacion() {
    return fechaPublicacion;
  }

  public void setFechaPublicacion(LocalDate fechaPublicacion) {
    this.fechaPublicacion = fechaPublicacion;
  }

  public List<Local> getLocales() {
    return locales;
  }

  public void setLocales(List<Local> locales) {
    this.locales = locales;
  }

  public List<Plato> getPlatos() {
    return platos;
  }

  public void setPlatos(List<Plato> platos) {
    this.platos = platos;
  }

  public Empresa getEmpresa() {
    return empresa;
  }

  public void setEmpresa(Empresa empresa) {
    this.empresa = empresa;
  }
}
