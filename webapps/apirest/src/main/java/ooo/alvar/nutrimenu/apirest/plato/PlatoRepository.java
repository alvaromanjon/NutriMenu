package ooo.alvar.nutrimenu.apirest.plato;

import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlatoRepository extends CrudRepository<Plato, Long> {
  List<Plato> findAllByLocalIdAndTipoPlato(Long idLocal, tipoPlato plato);
  List<Plato> findAllByLocalId(Long idLocal);
}
