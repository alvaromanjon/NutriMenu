package ooo.alvar.nutrimenu.apirest.plato;

import ooo.alvar.nutrimenu.apirest.menu.Menu;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlatoRepository extends CrudRepository<Plato, String> {
  public List<Plato> findByEmpresaId(String idEmpresa);
}
