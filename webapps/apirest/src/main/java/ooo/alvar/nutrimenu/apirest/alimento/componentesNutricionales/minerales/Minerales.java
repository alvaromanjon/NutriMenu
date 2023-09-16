package ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.minerales;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.ComponentesNutricionales;
import java.math.BigDecimal;

@Entity
public class Minerales {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(precision=10, scale=4)
  private BigDecimal calcio = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal hierro = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal potasio = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal magnesio = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal sodio = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal fosforo = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal selenio = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal zinc = BigDecimal.valueOf(0);
  @JsonIgnore
  @OneToOne(mappedBy = "minerales")
  private ComponentesNutricionales componentesNutricionales;

  public Minerales() {
  }

  public Minerales(BigDecimal calcio, BigDecimal hierro, BigDecimal potasio, BigDecimal magnesio, BigDecimal sodio, BigDecimal fosforo, BigDecimal selenio, BigDecimal zinc, ComponentesNutricionales componentesNutricionales) {
    super();
    this.calcio = calcio;
    this.hierro = hierro;
    this.potasio = potasio;
    this.magnesio = magnesio;
    this.sodio = sodio;
    this.fosforo = fosforo;
    this.selenio = selenio;
    this.zinc = zinc;
    this.componentesNutricionales = componentesNutricionales;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public BigDecimal getCalcio() {
    return calcio;
  }

  public void setCalcio(BigDecimal calcio) {
    this.calcio = calcio;
  }

  public BigDecimal getHierro() {
    return hierro;
  }

  public void setHierro(BigDecimal hierro) {
    this.hierro = hierro;
  }

  public BigDecimal getPotasio() {
    return potasio;
  }

  public void setPotasio(BigDecimal potasio) {
    this.potasio = potasio;
  }

  public BigDecimal getMagnesio() {
    return magnesio;
  }

  public void setMagnesio(BigDecimal magnesio) {
    this.magnesio = magnesio;
  }

  public BigDecimal getSodio() {
    return sodio;
  }

  public void setSodio(BigDecimal sodio) {
    this.sodio = sodio;
  }

  public BigDecimal getFosforo() {
    return fosforo;
  }

  public void setFosforo(BigDecimal fosforo) {
    this.fosforo = fosforo;
  }

  public BigDecimal getSelenio() {
    return selenio;
  }

  public void setSelenio(BigDecimal selenio) {
    this.selenio = selenio;
  }

  public BigDecimal getZinc() {
    return zinc;
  }

  public void setZinc(BigDecimal zinc) {
    this.zinc = zinc;
  }

  public ComponentesNutricionales getComponentesNutricionales() {
    return componentesNutricionales;
  }

  public void setComponentesNutricionales(ComponentesNutricionales componentesNutricionales) {
    this.componentesNutricionales = componentesNutricionales;
  }
}
