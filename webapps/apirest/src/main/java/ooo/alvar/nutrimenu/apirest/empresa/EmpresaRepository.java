package ooo.alvar.nutrimenu.apirest.empresa;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmpresaRepository extends CrudRepository<Empresa, Long> {
  List<Empresa> findAllByNombreContainsIgnoreCase(String nombre);
  Empresa findByCif(String cif);
}
