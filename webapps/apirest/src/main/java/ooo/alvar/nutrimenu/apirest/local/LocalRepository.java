package ooo.alvar.nutrimenu.apirest.local;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LocalRepository extends CrudRepository<Local, Long> {
    List<Local> findAllByEmpresaId(Long idEmpresa);
    List<Local> findAllByNombreContainsIgnoreCaseAndEmpresaId(String name, Long idEmpresa);
    Local findByEmail(String email);
    Local findByTelefono(String telefono);
}
