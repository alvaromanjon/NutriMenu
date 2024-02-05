package ooo.alvar.nutrimenu.apirest.plato;

import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlatoRepository extends CrudRepository<Plato, Long> {
  List<Plato> findAllByEmpresaIdAndTipoPlato(Long idLocal, tipoPlato plato);
  List<Plato> findAllByEmpresaId(Long idEmpresa);
}
