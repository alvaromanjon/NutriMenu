package ooo.alvar.nutrimenu.apirest.local;

import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.empresa.*;
import ooo.alvar.nutrimenu.apirest.menu.Menu;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"nombre"}),
        @UniqueConstraint(columnNames = {"email"})
      })
public class Local {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false)
  private String nombre;
  @Column(nullable = false)
  private String email;
  @Column(nullable = false)
  private String direccion;
  @Column(nullable = false)
  private String telefono;
  @ManyToOne
  @JoinColumn(name = "empresa_id")
  private Empresa empresa;
  @ManyToMany
  @JoinTable(
    name = "local_menu",
    joinColumns = @JoinColumn(name = "local_id"),
    inverseJoinColumns = @JoinColumn(name = "menu_id")
  )
  private List<Menu> menus = new ArrayList<>();

  public Local() {
  }

  public Local(String nombre, String email, String direccion, String telefono, Empresa empresa) {
    super();
    this.nombre = nombre;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
    this.empresa = empresa;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
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

  public List<Menu> getMenus() {
    return menus;
  }

  public void setMenus(List<Menu> menus) {
    this.menus = menus;
  }
}
