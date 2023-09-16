package ooo.alvar.nutrimenu.apirest.alimento;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.ComponentesNutricionales;
import ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento.grupoAlimento;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimento;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(uniqueConstraints = {
  @UniqueConstraint(columnNames = {"nombre", "empresa_id"})
})
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class Alimento {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false)
  private String nombre;
  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private grupoAlimento grupoAlimento;
  private double gramosPorRacion = 100;
  @ManyToOne
  @JoinColumn(name = "empresa_id")
  private Empresa empresa;
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "componentes_nutricionales_id", referencedColumnName = "id", unique = true)
  private ComponentesNutricionales componentesNutricionales;
  @JsonIgnore
  @OneToMany(mappedBy = "alimento")
  private List<PlatoAlimento> platos = new ArrayList<>();

  public Alimento() {
  }

  public Alimento(String nombre, grupoAlimento grupoAlimento, double gramosPorRacion, Empresa empresa, ComponentesNutricionales componentesNutricionales) {
    super();
    this.nombre = nombre;
    this.grupoAlimento = grupoAlimento;
    this.gramosPorRacion = gramosPorRacion;
    this.empresa = empresa;
    this.componentesNutricionales = componentesNutricionales;
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

  public ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento.grupoAlimento getGrupoAlimento() {
    return grupoAlimento;
  }

  public void setGrupoAlimento(ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento.grupoAlimento grupoAlimento) {
    this.grupoAlimento = grupoAlimento;
  }

  public double getGramosPorRacion() {
    return gramosPorRacion;
  }

  public void setGramosPorRacion(double gramosPorRacion) {
    this.gramosPorRacion = gramosPorRacion;
  }

  public Empresa getEmpresa() {
    return empresa;
  }

  public void setEmpresa(Empresa empresa) {
    this.empresa = empresa;
  }

  public ComponentesNutricionales getComponentesNutricionales() {
    return componentesNutricionales;
  }

  public void setComponentesNutricionales(ComponentesNutricionales componentesNutricionales) {
    this.componentesNutricionales = componentesNutricionales;
  }

  public List<PlatoAlimento> getPlatos() {
    return platos;
  }

  public void setPlatos(List<PlatoAlimento> platos) {
    this.platos = platos;
  }
}
