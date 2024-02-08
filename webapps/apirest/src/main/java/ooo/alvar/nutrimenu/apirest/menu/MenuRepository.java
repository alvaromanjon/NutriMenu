package ooo.alvar.nutrimenu.apirest.menu;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MenuRepository extends CrudRepository<Menu, Long> {
    List<Menu> findAllByEmpresaId(Long idEmpresa);
    @Query("SELECT m FROM Menu m JOIN m.locales l WHERE l.id = :localId")
    List<Menu> findAllByLocalId(@Param("localId") Long localId);

    @Query("SELECT m FROM Menu m JOIN m.platos p WHERE p.id = :platoId")
    List<Menu> findAllByPlatoId(@Param("platoId") Long platoId);
}
