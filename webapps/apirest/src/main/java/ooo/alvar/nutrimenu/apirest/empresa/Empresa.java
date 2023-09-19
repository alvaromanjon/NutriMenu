package ooo.alvar.nutrimenu.apirest.empresa;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.local.Local;
import ooo.alvar.nutrimenu.apirest.usuario.Usuario;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"nombre"}),
        @UniqueConstraint(columnNames = {"email"}),
        @UniqueConstraint(columnNames = {"telefono"}),
        @UniqueConstraint(columnNames = {"cif"})
      })
public class Empresa {

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
  @Column(nullable = false)
  private String cif;
  @JsonIgnore
  @OneToMany(mappedBy="empresa", cascade = CascadeType.REMOVE, orphanRemoval = true)
  private List<Local> locales = new ArrayList<>();
  @JsonIgnore
  @OneToMany(mappedBy="empresa", cascade = CascadeType.REMOVE, orphanRemoval = true)
  private List<Usuario> usuarios = new ArrayList<>();

  public Empresa() {
  }

  public Empresa(String nombre, String email, String direccion, String telefono, String cif) {
    super();
    this.nombre = nombre;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
    this.cif = cif;
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

  public String getCif() {
    return cif;
  }

  public void setCif(String cif) {
    this.cif = cif;
  }
}
