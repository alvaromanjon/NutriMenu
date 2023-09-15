package ooo.alvar.nutrimenu.apirest.menu;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface MenuRepository extends CrudRepository<Menu, Long> {
    List<Menu> findByEmpresaId(Long idEmpresa);
}
