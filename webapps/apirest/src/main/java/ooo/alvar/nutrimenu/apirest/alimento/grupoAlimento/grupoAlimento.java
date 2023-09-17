package ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento;

public enum grupoAlimento {
  LACTEOS(1, "Lácteos"),
  PROTEICOS(2, "Alimentos proteicos"),
  FRUTA(3, "Fruta"),
  VERDURAS(4, "Verduras"),
  CEREALES(5, "Cereales"),
  GRASAS(6, "Grasas"),
  LEGUMBRES(7, "Legumbres"),
  COMBINACION(8, "Combinación de alimentos"),
  NO_APLICA(9, "No aplica");

  private final int codigo;
  private final String grupoAlimento;

  grupoAlimento(int codigo, String grupoAlimento) {
    this.codigo = codigo;
    this.grupoAlimento = grupoAlimento;
  }

  public int getCodigo() {
    return codigo;
  }

  public String getGrupoAlimento() {
    return grupoAlimento;
  }
}

