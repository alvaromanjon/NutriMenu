package ooo.alvar.nutrimenu.apirest.menu.DTOs;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

public class MenuDTO {
  private String nombre;
  private String descripcion;
  private LocalDate fechaPublicacion;
  private List<PlatosDTO> platos;
  private List<LocalesDTO> locales;

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

  public LocalDate getFechaPublicacion() {
    return fechaPublicacion;
  }

  public void setFechaPublicacion(LocalDate fechaPublicacion) {
    this.fechaPublicacion = fechaPublicacion;
  }

  public List<PlatosDTO> getPlatos() {
    return platos;
  }

  public void setPlatos(List<PlatosDTO> platos) {
    this.platos = platos;
  }

  public List<LocalesDTO> getLocales() {
    return locales;
  }

  public void setLocales(List<LocalesDTO> locales) {
    this.locales = locales;
  }
}
