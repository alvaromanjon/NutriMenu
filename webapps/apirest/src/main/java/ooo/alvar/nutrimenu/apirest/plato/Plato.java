package ooo.alvar.nutrimenu.apirest.plato;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.menu.Menu;
import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimento;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"nombre", "empresa_id"})
      })
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
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
  @JsonIgnore
  @ManyToMany(mappedBy = "platos")
  private List<Menu> menus = new ArrayList<>();
  @OneToMany(mappedBy = "plato", cascade = CascadeType.REMOVE, orphanRemoval = true)
  private List<PlatoAlimento> alimentos = new ArrayList<>();

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

  public List<Menu> getMenus() {
    return menus;
  }

  public void setMenus(List<Menu> menus) {
    this.menus = menus;
  }

  public List<PlatoAlimento> getAlimentos() {
    return alimentos;
  }

  public void setAlimentos(List<PlatoAlimento> alimentos) {
    this.alimentos = alimentos;
  }
}
