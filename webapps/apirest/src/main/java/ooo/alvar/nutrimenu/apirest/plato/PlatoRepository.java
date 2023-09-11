package ooo.alvar.nutrimenu.apirest.plato;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlatoRepository extends CrudRepository<Plato, String> {
  List<Plato> findByEmpresaId(String idEmpresa);
}
