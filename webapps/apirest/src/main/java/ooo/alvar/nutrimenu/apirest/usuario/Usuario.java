package ooo.alvar.nutrimenu.apirest.usuario;

import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.local.Local;
import ooo.alvar.nutrimenu.apirest.usuario.rol.Rol;


@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"usuario"}),
        @UniqueConstraint(columnNames = {"email"})
      })
public class Usuario {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false)
  private String usuario;
  @Column(nullable = false)
  private String password;
  @Column(nullable = false)
  private String nombre;
  @Column(nullable = false)
  private String email;
  @Column(nullable = false)
  private Rol rol;
  @ManyToOne
  @JoinColumn(name = "empresa_id")
  private Empresa empresa;

  @ManyToOne
  @JoinColumn(name = "local_id")
  private Local local;

  public Usuario() {
  }

  public Usuario(String usuario, String password, String nombre, String email, Rol rol, Empresa empresa, Local local) {
    super();
    this.usuario = usuario;
    this.password = password;
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
    this.empresa = empresa;
    this.local = local;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsuario() {
    return usuario;
  }

  public void setUsuario(String usuario) {
    this.usuario = usuario;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
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

  public Rol getRol() {
    return rol;
  }

  public void setRol(Rol rol) {
    this.rol = rol;
  }

  public Empresa getEmpresa() {
    return empresa;
  }

  public void setEmpresa(Empresa empresa) {
    this.empresa = empresa;
  }

  public Local getLocal() {
    return local;
  }

  public void setLocal(Local local) {
    this.local = local;
  }
}
