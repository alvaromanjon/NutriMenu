package ooo.alvar.nutrimenu.apirest.usuario.rol;

public enum Rol {

  ADMINISTRADOR_GLOBAL(0, "Administrador global"),
  ADMINISTRADOR_EMPRESA(1, "Administrador de empresa"),
  ADMINISTRADOR_LOCAL(2, "Administrador de local"),
  CAMARERO(3, "Camarero");

  private final int codigo;
  private final String rol;

  Rol(int codigo, String rol) {
    this.codigo = codigo;
    this.rol = rol;
  }

  public int getCodigo() {
    return codigo;
  }

  public String getRol() {
    return rol;
  }
}
