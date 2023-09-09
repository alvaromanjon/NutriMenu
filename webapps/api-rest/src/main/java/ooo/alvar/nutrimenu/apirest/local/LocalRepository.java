package ooo.alvar.nutrimenu.apirest.local;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface LocalRepository extends CrudRepository<Local, String> {
    public List<Local> findByEmpresaId(String idEmpresa);
    Optional<Local> findTopByIdContainsIgnoreCaseOrderByIdDesc(String name);
}
