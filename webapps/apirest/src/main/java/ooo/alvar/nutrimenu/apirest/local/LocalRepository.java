package ooo.alvar.nutrimenu.apirest.local;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LocalRepository extends CrudRepository<Local, String> {
    public List<Local> findByEmpresaId(String idEmpresa);
}
