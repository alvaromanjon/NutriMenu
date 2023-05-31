package app.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "platos")
public class Dish {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Integer id_plato;

	@Column(nullable = false)
	public int id_tipo_platos;

	@Column(length = 100, nullable = true)
	public String nombre_plato;

	@Column(length = 100, nullable = true)
	public String descripcion;

	public Integer id_empresa;

	public String tipo_plato;
	public Timestamp fecha_creacion;

	public Dish(Integer id_plato, int id_tipo_platos, String nombre_plato, String descripcion, Integer id_empresa,
			Timestamp fecha_creacion) {
		this.id_plato = id_plato;
		this.id_tipo_platos = id_tipo_platos;
		this.nombre_plato = nombre_plato;
		this.descripcion = descripcion;
		this.id_empresa = id_empresa;
		this.fecha_creacion = fecha_creacion;

	}

	public Dish(Integer id_plato, String nombre_plato) {
		this.id_plato = id_plato;
		this.nombre_plato = nombre_plato;

	}

	public Dish(String tipo_plato, Integer id_plato, String nombre_plato) {
		this.tipo_plato = tipo_plato;
		this.id_plato = id_plato;
		this.nombre_plato = nombre_plato;
	}

	public Dish() {

	}

	public Timestamp getFecha_creacion() {
		return fecha_creacion;
	}

	public void setFecha_creacion(Timestamp fecha_creacion) {
		this.fecha_creacion = fecha_creacion;
	}

	public Integer getId_plato() {
		return id_plato;
	}

	public void setId_plato(Integer id_plato) {
		this.id_plato = id_plato;
	}

	public int getId_tipo_platos() {
		return id_tipo_platos;
	}

	public void setId_tipo_platos(int id_tipo_platos) {
		this.id_tipo_platos = id_tipo_platos;
	}

	public String getNombre_plato() {
		return nombre_plato;
	}

	public void setNombre_plato(String nombre_plato) {
		this.nombre_plato = nombre_plato;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getId_empresa() {
		return id_empresa;
	}

	public void setId_empresa(Integer id_empresa) {
		this.id_empresa = id_empresa;
	}

}
