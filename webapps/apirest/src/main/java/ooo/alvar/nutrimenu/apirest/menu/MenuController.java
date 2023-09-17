package ooo.alvar.nutrimenu.apirest.menu;

import ooo.alvar.nutrimenu.apirest.excepciones.LackOfParametersException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MenuController {

  @Autowired
  private MenuService menuService;

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("/menus")
  public ResponseEntity<List<Menu>> getMenus(@RequestParam(required=false, name="id_menu") Long id,
                                         @RequestParam(required=false, name="id_empresa") Long idEmpresa) {
    List<Menu> listaMenus = new ArrayList<>();
    if (id != null) {
      listaMenus.add(menuService.getMenu(id));
    } else if (idEmpresa != null) {
      listaMenus = menuService.getAllMenusByEmpresa(idEmpresa);
    } else {
      throw new LackOfParametersException("No se ha especificado ningún parámetro de búsqueda");
    }
    return new ResponseEntity<>(listaMenus, HttpStatus.OK);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.POST, value="/menus")
  public ResponseEntity<Menu> addMenu(@RequestParam(name="id_empresa") Long idEmpresa, @RequestBody Menu menu) {
    Menu menuCreado = menuService.addMenu(idEmpresa, menu);
    return new ResponseEntity<>(menuCreado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/add/menu/platos")
  public ResponseEntity<Menu> addPlatoToMenu(@RequestParam(name="id_menu") Long idMenu, @RequestParam(name="id_plato") Long idPlato) {
    Menu menuCreado = menuService.addPlatoToMenu(idMenu, idPlato);
    return new ResponseEntity<>(menuCreado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/menus")
  public ResponseEntity<Menu> updateMenu(@RequestParam(name="id_menu") Long idMenu, @RequestBody Menu menu) {
    Menu menuActualizado = menuService.updateMenu(menu, idMenu);
    return new ResponseEntity<>(menuActualizado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.DELETE, value="/menus")
  public ResponseEntity<String> deleteMenu(@RequestParam(name="id_menu") Long idMenu) {
    menuService.deleteMenu(idMenu);
    return new ResponseEntity<>("Menú con id " + idMenu + " eliminado correctamente", HttpStatus.OK);
  }
}
