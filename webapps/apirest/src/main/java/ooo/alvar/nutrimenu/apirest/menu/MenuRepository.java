package ooo.alvar.nutrimenu.apirest.menu;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface MenuRepository extends CrudRepository<Menu, String> {
    public List<Menu> findByEmpresaId(String idEmpresa);
    Optional<Menu> findTopByIdContainsIgnoreCaseOrderByIdDesc(String name);
}
