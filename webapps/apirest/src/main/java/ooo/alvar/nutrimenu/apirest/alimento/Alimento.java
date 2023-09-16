package ooo.alvar.nutrimenu.apirest.alimento;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.ComponentesNutricionales;
import ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento.grupoAlimento;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.plato.Plato;

import java.util.ArrayList;
import java.util.List;

@Entity
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
  private double gramosEscogidos = 100;
  @ManyToOne
  @JoinColumn(name = "empresa_id")
  private Empresa empresa;
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "componentes_originales_id", referencedColumnName = "id", unique = true)
  private ComponentesNutricionales componentesOriginales;
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "componentes_cambiados_id", referencedColumnName = "id", unique = true)
  private ComponentesNutricionales componentesCambiados;
  @JsonIgnore
  @ManyToMany(mappedBy = "alimentos")
  private List<Plato> platos = new ArrayList<>();

  public Alimento() {
  }

  public Alimento(String nombre, grupoAlimento grupoAlimento, double gramosPorRacion, double gramosEscogidos, Empresa empresa, ComponentesNutricionales componentesOriginales, ComponentesNutricionales componentesCambiados) {
    super();
    this.nombre = nombre;
    this.grupoAlimento = grupoAlimento;
    this.gramosPorRacion = gramosPorRacion;
    this.gramosEscogidos = gramosEscogidos;
    this.empresa = empresa;
    this.componentesOriginales = componentesOriginales;
    this.componentesCambiados = componentesCambiados;
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

  public double getGramosEscogidos() {
    return gramosEscogidos;
  }

  public void setGramosEscogidos(double gramosEscogidos) {
    this.gramosEscogidos = gramosEscogidos;
  }

  public Empresa getEmpresa() {
    return empresa;
  }

  public void setEmpresa(Empresa empresa) {
    this.empresa = empresa;
  }

  public ComponentesNutricionales getComponentesOriginales() {
    return componentesOriginales;
  }

  public void setComponentesOriginales(ComponentesNutricionales componentesOriginales) {
    this.componentesOriginales = componentesOriginales;
  }

  public ComponentesNutricionales getComponentesCambiados() {
    return componentesCambiados;
  }

  public void setComponentesCambiados(ComponentesNutricionales componentesCambiados) {
    this.componentesCambiados = componentesCambiados;
  }

  public List<Plato> getPlatos() {
    return platos;
  }

  public void setPlatos(List<Plato> platos) {
    this.platos = platos;
  }
}
