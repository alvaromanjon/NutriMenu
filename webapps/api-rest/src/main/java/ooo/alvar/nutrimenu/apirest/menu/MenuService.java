package ooo.alvar.nutrimenu.apirest.menu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenuService {

  @Autowired
  private MenuRepository menuRepository;

  public List<Menu> getAllMenusByEmpresa(String id) {
    List<Menu> menus = new ArrayList<>();
    menuRepository.findByEmpresaId(id)
      .forEach(menus::add);

    return menus;
  }

  public Menu getMenu(String id) {
    return menuRepository.findById(id).orElse(null);
  }

  public void addMenu(Menu menu) {
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
    menuRepository.save(menu);
  }

  public void updateMenu(Menu menu, String id) {
    menu.setId(id);
    Menu menuOriginal = menuRepository.findById(id).orElse(null);
    menu.setFechaCreacion(menuOriginal.getFechaCreacion());
    menu.setFechaModificacion(java.time.Instant.now());
    menuRepository.save(menu);
  }

  public void deleteMenu(String id) {
    menuRepository.deleteById(id);
  }
}
