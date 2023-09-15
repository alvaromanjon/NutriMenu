package ooo.alvar.nutrimenu.apirest.menu;

import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.local.Local;

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
  @ManyToOne
  @JoinColumn(name = "empresa_id")
  private Empresa empresa;


  @ManyToMany
  @JoinTable(
    name = "local_menu",
    joinColumns = @JoinColumn(name = "menu_id"),
    inverseJoinColumns = @JoinColumn(name = "local_id")
  )
  private List<Local> locales = new ArrayList<>();

  public Menu() {
  }

  public Menu(String nombre, String descripcion, Empresa empresa) {
    super();
    this.nombre = nombre;
    this.descripcion = descripcion;
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

  public List<Local> getLocales() {
    return locales;
  }

  public void setLocales(List<Local> locales) {
    this.locales = locales;
  }
}
