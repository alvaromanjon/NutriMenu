package ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.vitaminas;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.ComponentesNutricionales;

import java.math.BigDecimal;

@Entity
public class Vitaminas {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(precision=10, scale=4)
  private BigDecimal vitaminaA = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal vitaminaD = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal vitaminaE = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal vitaminaB9 = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal vitaminaB3 = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal vitaminaB2 = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal vitaminaB1 = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal vitaminaB12 = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal vitaminaB6 = BigDecimal.valueOf(0);
  @Column(precision=10, scale=4)
  private BigDecimal vitaminaC = BigDecimal.valueOf(0);
  @JsonIgnore
  @OneToOne(mappedBy = "vitaminas")
  private ComponentesNutricionales componentesNutricionales;

  public Vitaminas() {
  }

  public Vitaminas(BigDecimal vitaminaA, BigDecimal vitaminaD, BigDecimal vitaminaE, BigDecimal vitaminaB9, BigDecimal vitaminaB3, BigDecimal vitaminaB2, BigDecimal vitaminaB1, BigDecimal vitaminaB12, BigDecimal vitaminaB6, BigDecimal vitaminaC) {
    super();
    this.vitaminaA = vitaminaA;
    this.vitaminaD = vitaminaD;
    this.vitaminaE = vitaminaE;
    this.vitaminaB9 = vitaminaB9;
    this.vitaminaB3 = vitaminaB3;
    this.vitaminaB2 = vitaminaB2;
    this.vitaminaB1 = vitaminaB1;
    this.vitaminaB12 = vitaminaB12;
    this.vitaminaB6 = vitaminaB6;
    this.vitaminaC = vitaminaC;
  }

  public Vitaminas(Vitaminas c) {
    this(c.getVitaminaA(), c.getVitaminaD(), c.getVitaminaE(), c.getVitaminaB9(), c.getVitaminaB3(), c.getVitaminaB2(), c.getVitaminaB1(), c.getVitaminaB12(), c.getVitaminaB6(), c.getVitaminaC());
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public BigDecimal getVitaminaA() {
    return vitaminaA;
  }

  public void setVitaminaA(BigDecimal vitaminaA) {
    this.vitaminaA = vitaminaA;
  }

  public BigDecimal getVitaminaD() {
    return vitaminaD;
  }

  public void setVitaminaD(BigDecimal vitaminaD) {
    this.vitaminaD = vitaminaD;
  }

  public BigDecimal getVitaminaE() {
    return vitaminaE;
  }

  public void setVitaminaE(BigDecimal vitaminaE) {
    this.vitaminaE = vitaminaE;
  }

  public BigDecimal getVitaminaB9() {
    return vitaminaB9;
  }

  public void setVitaminaB9(BigDecimal vitaminaB9) {
    this.vitaminaB9 = vitaminaB9;
  }

  public BigDecimal getVitaminaB3() {
    return vitaminaB3;
  }

  public void setVitaminaB3(BigDecimal vitaminaB3) {
    this.vitaminaB3 = vitaminaB3;
  }

  public BigDecimal getVitaminaB2() {
    return vitaminaB2;
  }

  public void setVitaminaB2(BigDecimal vitaminaB2) {
    this.vitaminaB2 = vitaminaB2;
  }

  public BigDecimal getVitaminaB1() {
    return vitaminaB1;
  }

  public void setVitaminaB1(BigDecimal vitaminaB1) {
    this.vitaminaB1 = vitaminaB1;
  }

  public BigDecimal getVitaminaB12() {
    return vitaminaB12;
  }

  public void setVitaminaB12(BigDecimal vitaminaB12) {
    this.vitaminaB12 = vitaminaB12;
  }

  public BigDecimal getVitaminaB6() {
    return vitaminaB6;
  }

  public void setVitaminaB6(BigDecimal vitaminaB6) {
    this.vitaminaB6 = vitaminaB6;
  }

  public BigDecimal getVitaminaC() {
    return vitaminaC;
  }

  public void setVitaminaC(BigDecimal vitaminaC) {
    this.vitaminaC = vitaminaC;
  }

  public ComponentesNutricionales getComponentesNutricionales() {
    return componentesNutricionales;
  }

  public void setComponentesNutricionales(ComponentesNutricionales componentesNutricionales) {
    this.componentesNutricionales = componentesNutricionales;
  }
}
