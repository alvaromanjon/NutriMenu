package ooo.alvar.nutrimenu.apirest.menu;

import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.empresa.EmpresaRepository;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MenuService {

  @Autowired
  private MenuRepository menuRepository;

  @Autowired
  private EmpresaRepository empresaRepository;

  public Menu getMenu(Long id) {
    Menu menuDevuelto = menuRepository.findById(id).orElse(null);
    if (menuDevuelto == null) {
      throw new EntityDoesntExistsException("No existe un menú con id " + id);
    }
    return menuDevuelto;
  }

  public List<Menu> getAllMenus() {
    List<Menu> menus = new ArrayList<>();
    menuRepository.findAll()
      .forEach(menus::add);

    return menus;
  }

  public List<Menu> getAllMenusByEmpresa(Long id) {
    List<Menu> menus = new ArrayList<>();
    menus.addAll(menuRepository.findByEmpresaId(id));

    return menus;
  }

  public Menu addMenu(Long idEmpresa, Menu menu) {
    Optional<Empresa> empresa = empresaRepository.findById(idEmpresa);

    if (!empresa.isPresent()) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + idEmpresa);
    }

    menu.setEmpresa(empresa.get());
    menu.setFechaCreacion(java.time.Instant.now());
    menu.setFechaModificacion(java.time.Instant.now());

    return menuRepository.save(menu);
  }

  public Menu updateMenu(Menu menu, Long id) {
    Optional<Menu> menuAntiguo = menuRepository.findById(id);

    if (!menuAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un menú con id " + id);
    }

    Menu nuevoMenu = menuAntiguo.get();
    nuevoMenu.setNombre(menu.getNombre());
    nuevoMenu.setDescripcion(menu.getDescripcion());
    nuevoMenu.setFechaModificacion(java.time.Instant.now());

    return menuRepository.save(nuevoMenu);
  }

  public void deleteMenu(Long id) {
    if (!menuRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe un menú con id " + id);
    }

    menuRepository.deleteById(id);
  }
}
