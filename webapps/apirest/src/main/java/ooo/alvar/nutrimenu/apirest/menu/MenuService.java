package ooo.alvar.nutrimenu.apirest.menu;

import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenuService {

  @Autowired
  private MenuRepository menuRepository;

  public Menu getMenu(String id) {
    Menu menuDevuelto = menuRepository.findById(id).orElse(null);
    if (menuDevuelto == null) {
      throw new EntityDoesntExistsException("No existe un menú con id " + id);
    }
    return menuDevuelto;
  }

  public List<Menu> getAllMenusByEmpresa(String id) {
    List<Menu> menus = new ArrayList<>();
    menuRepository.findByEmpresaId(id)
      .forEach(menus::add);

    return menus;
  }

  public Menu addMenu(Menu menu) {
    Menu ultimoMenu = menuRepository.findTopByIdContainsIgnoreCaseOrderByIdDesc(menu.getEmpresa().getId() + "-" + menu.getNombre().replace(' ', '_')).orElse(null);
    int contador = 1;

    if (ultimoMenu != null) {
      String ultimoMenuId = ultimoMenu.getId();
      String[] ultimoMenuPartes = ultimoMenuId.split("-");
      contador = Integer.parseInt(ultimoMenuPartes[ultimoMenuPartes.length - 1]) + 1;
    }

    menu.setId(menu.getEmpresa().getId() + "-" + menu.getNombre().toLowerCase().replace(' ', '_') + "-" + contador);

    menu.setFechaCreacion(java.time.Instant.now());
    menu.setFechaModificacion(java.time.Instant.now());
    return menuRepository.save(menu);
  }

  public Menu updateMenu(Menu menu, String id) {
    if (!menuRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe un menú con id " + id);
    }

    menu.setId(id);
    Menu menuOriginal = menuRepository.findById(id).orElse(null);
    menu.setFechaCreacion(menuOriginal.getFechaCreacion());
    menu.setFechaModificacion(java.time.Instant.now());
    return menuRepository.save(menu);
  }

  public void deleteMenu(String id) {
    if (!menuRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe un menú con id " + id);
    }

    menuRepository.deleteById(id);
  }
}
