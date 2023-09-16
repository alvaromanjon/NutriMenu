package ooo.alvar.nutrimenu.apirest.alimento;

import ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento.grupoAlimento;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface AlimentoRepository extends CrudRepository<Alimento, Long> {
  List<Alimento> findByEmpresaId(Long id);
  List<Alimento> findAllByNombreContainsIgnoreCase(String nombre);
  List<Alimento> findAllByGrupoAlimento(grupoAlimento grupoAlimento);
}
