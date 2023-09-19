package ooo.alvar.nutrimenu.apirest.menu;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MenuRepository extends CrudRepository<Menu, Long> {
    List<Menu> findAllByLocalId(Long idLocal);
}
