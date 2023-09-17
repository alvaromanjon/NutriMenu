package ooo.alvar.nutrimenu.apirest.plato.tipoPlato;

public enum tipoPlato {
  ENTRANTE(0, "Entrante"),
  PRIMER_PLATO(1, "Primer plato"),
  SEGUNDO_PLATO(2, "Segundo plato"),
  POSTRE(3, "Postre");

  private final int codigo;
  private final String tipoPlato;

  tipoPlato(int codigo, String tipoPlato) {
    this.codigo = codigo;
    this.tipoPlato = tipoPlato;
  }

  public int getCodigo() {
    return codigo;
  }

  public String getTipoPlato() {
    return tipoPlato;
  }
}
