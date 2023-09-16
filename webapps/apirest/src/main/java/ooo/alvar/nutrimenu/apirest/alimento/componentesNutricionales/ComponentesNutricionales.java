package ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales;

import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.minerales.Minerales;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.vitaminas.Vitaminas;

import java.math.BigDecimal;

@Entity
public class ComponentesNutricionales {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(precision=6, scale=2)
  private BigDecimal calorias = BigDecimal.valueOf(0);
  @Column(precision=6, scale=2)
  private BigDecimal grasas = BigDecimal.valueOf(0);
  @Column(precision=6, scale=2)
  private BigDecimal grasasSaturadas = BigDecimal.valueOf(0);
  @Column(precision=6, scale=2)
  private BigDecimal hidratosCarbono = BigDecimal.valueOf(0);
  @Column(precision=6, scale=2)
  private BigDecimal azucares = BigDecimal.valueOf(0);
  @Column(precision=6, scale=2)
  private BigDecimal fibra = BigDecimal.valueOf(0);
  @Column(precision=6, scale=2)
  private BigDecimal proteinas = BigDecimal.valueOf(0);
  @Column(precision=6, scale=2)
  private BigDecimal sal = BigDecimal.valueOf(0);
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "vitaminas_id", referencedColumnName = "id")
  private Vitaminas vitaminas;
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "minerales_id", referencedColumnName = "id")
  private Minerales minerales;

  public ComponentesNutricionales() {
  }

  public ComponentesNutricionales(BigDecimal calorias, BigDecimal grasas, BigDecimal grasasSaturadas, BigDecimal hidratosCarbono, BigDecimal azucares, BigDecimal fibra, BigDecimal proteinas, BigDecimal sal) {
    super();
    this.calorias = calorias;
    this.grasas = grasas;
    this.grasasSaturadas = grasasSaturadas;
    this.hidratosCarbono = hidratosCarbono;
    this.azucares = azucares;
    this.fibra = fibra;
    this.proteinas = proteinas;
    this.sal = sal;
  }

  public ComponentesNutricionales(ComponentesNutricionales c) {
    this(c.getCalorias(), c.getGrasas(), c.getGrasasSaturadas(), c.getHidratosCarbono(), c.getAzucares(), c.getFibra(), c.getProteinas(), c.getSal());
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public BigDecimal getCalorias() {
    return calorias;
  }

  public void setCalorias(BigDecimal calorias) {
    this.calorias = calorias;
  }

  public BigDecimal getGrasas() {
    return grasas;
  }

  public void setGrasas(BigDecimal grasas) {
    this.grasas = grasas;
  }

  public BigDecimal getGrasasSaturadas() {
    return grasasSaturadas;
  }

  public void setGrasasSaturadas(BigDecimal grasasSaturadas) {
    this.grasasSaturadas = grasasSaturadas;
  }

  public BigDecimal getHidratosCarbono() {
    return hidratosCarbono;
  }

  public void setHidratosCarbono(BigDecimal hidratosCarbono) {
    this.hidratosCarbono = hidratosCarbono;
  }

  public BigDecimal getAzucares() {
    return azucares;
  }

  public void setAzucares(BigDecimal azucares) {
    this.azucares = azucares;
  }

  public BigDecimal getFibra() {
    return fibra;
  }

  public void setFibra(BigDecimal fibra) {
    this.fibra = fibra;
  }

  public BigDecimal getProteinas() {
    return proteinas;
  }

  public void setProteinas(BigDecimal proteinas) {
    this.proteinas = proteinas;
  }

  public BigDecimal getSal() {
    return sal;
  }

  public void setSal(BigDecimal sal) {
    this.sal = sal;
  }

  public Vitaminas getVitaminas() {
    return vitaminas;
  }

  public void setVitaminas(Vitaminas vitaminas) {
    this.vitaminas = vitaminas;
  }

  public Minerales getMinerales() {
    return minerales;
  }

  public void setMinerales(Minerales minerales) {
    this.minerales = minerales;
  }
}
