package ooo.alvar.nutrimenu.apirest.relaciones;

import java.util.List;
import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;

public class PlatoDTO {
  private tipoPlato tipoPlato;
  private String nombre;
  private String descripcion;
  private List<AlimentoDTO> alimentos;

  public tipoPlato getTipoPlato() {
    return tipoPlato;
  }

  public void setTipoPlato(tipoPlato tipoPlato) {
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

  public List<AlimentoDTO> getAlimentos() {
    return alimentos;
  }

  public void setAlimentos(List<AlimentoDTO> alimentos) {
    this.alimentos = alimentos;
  }
}
