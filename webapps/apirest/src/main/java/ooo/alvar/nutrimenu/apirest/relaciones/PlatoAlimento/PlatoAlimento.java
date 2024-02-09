package ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimento;

import jakarta.persistence.*;
import ooo.alvar.nutrimenu.apirest.alimento.Alimento;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.ComponentesNutricionales;
import ooo.alvar.nutrimenu.apirest.plato.Plato;

@Entity
@Table(uniqueConstraints = {
  @UniqueConstraint(columnNames = {"plato_id", "alimento_id"})
})
public class PlatoAlimento {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @ManyToOne
  @JoinColumn(name = "plato_id")
  private Plato plato;
  @ManyToOne
  @JoinColumn(name = "alimento_id")
  private Alimento alimento;
  private double gramosEscogidos = 100;
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "componentes_nutricionales_id", referencedColumnName = "id")
  private ComponentesNutricionales componentesNutricionales;

  public PlatoAlimento() {
  }

  public PlatoAlimento(double gramosEscogidos) {
    this.gramosEscogidos = gramosEscogidos;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Plato getPlato() {
    return plato;
  }

  public void setPlato(Plato plato) {
    this.plato = plato;
  }

  public Alimento getAlimento() {
    return alimento;
  }

  public void setAlimento(Alimento alimento) {
    this.alimento = alimento;
  }

  public double getGramosEscogidos() {
    return gramosEscogidos;
  }

  public void setGramosEscogidos(double gramosEscogidos) {
    this.gramosEscogidos = gramosEscogidos;
  }

  public ComponentesNutricionales getComponentesNutricionales() {
    return componentesNutricionales;
  }

  public void setComponentesNutricionales(ComponentesNutricionales componentesNutricionales) {
    this.componentesNutricionales = componentesNutricionales;
  }
}
