package ooo.alvar.nutrimenu.apirest.usuario.rol;

public enum Rol {

  ADMINISTRADOR(0, "Administrador global"),
  EDITOR(1, "Editor del local"),
  CAMARERO(2, "Camarero");

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
