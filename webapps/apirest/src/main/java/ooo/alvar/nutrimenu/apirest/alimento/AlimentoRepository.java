package ooo.alvar.nutrimenu.apirest.alimento;

import ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento.grupoAlimento;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;


public interface AlimentoRepository extends CrudRepository<Alimento, Long> {
  Optional<Alimento> findByNombre(String nombre);
  List<Alimento> findAllByGrupoAlimento(grupoAlimento grupoAlimento);
}
