package ooo.alvar.nutrimenu.apirest.plato;

import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlatoRepository extends CrudRepository<Plato, String> {
  List<Plato> findByEmpresaId(String idEmpresa);
  List<Plato> findByEmpresaIdAndTipoPlato(String idEmpresa, tipoPlato plato);
}
