package ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimento;

import org.springframework.data.repository.CrudRepository;

public interface PlatoAlimentoRepository extends CrudRepository<PlatoAlimento, Long> {
  void deleteByPlatoId(Long idPlato);
  void deleteByAlimentoId(Long idAlimento);
  PlatoAlimento findByPlatoIdAndAlimentoId(Long idPlato, Long idAlimento);
}
