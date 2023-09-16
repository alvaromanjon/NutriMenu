package ooo.alvar.nutrimenu.apirest.menu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MenuController {

  @Autowired
  private MenuService menuService;

  @RequestMapping("/empresas/{idEmpresa}/menus")
  public List<Menu> getAllMenusByEmpresa(@PathVariable Long idEmpresa) {
    return menuService.getAllMenusByEmpresa(idEmpresa);
  }

  @RequestMapping("/empresas/{idEmpresa}/menus/{idMenu}")
  public Menu getMenu(@PathVariable Long idMenu) {
    return menuService.getMenu(idMenu);
  }

  @RequestMapping(method = RequestMethod.POST, value="/empresas/{idEmpresa}/menus")
  public ResponseEntity<Menu> addMenu(@PathVariable Long idEmpresa, @RequestBody Menu menu) {
    Menu menuCreado = menuService.addMenu(idEmpresa, menu);
    return new ResponseEntity<>(menuCreado, HttpStatus.CREATED);
  }
  @RequestMapping(method = RequestMethod.POST, value="/empresas/{idEmpresa}/menus/{idMenu}/locales/{idLocal}")
  public ResponseEntity<Menu> addLocalToMenu(@PathVariable Long idEmpresa, @PathVariable Long idMenu, @PathVariable Long idLocal) {
    Menu menuCreado = menuService.addLocaltoMenu(idMenu, idLocal);
    return new ResponseEntity<>(menuCreado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.POST, value="/empresas/{idEmpresa}/menus/{idMenu}/platos/{idPlato}")
  public ResponseEntity<Menu> addPlatoToMenu(@PathVariable Long idEmpresa, @PathVariable Long idMenu, @PathVariable Long idPlato) {
    Menu menuCreado = menuService.addPlatoToMenu(idMenu, idPlato);
    return new ResponseEntity<>(menuCreado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/empresas/{idEmpresa}/menus/{idMenu}")
  public ResponseEntity<Menu> updateMenu(@PathVariable Long idEmpresa, @PathVariable Long idMenu, @RequestBody Menu menu) {
    Menu menuActualizado = menuService.updateMenu(menu, idMenu);
    return new ResponseEntity<>(menuActualizado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/empresas/{idEmpresa}/menus/{idMenu}")
  public void deleteMenu(@PathVariable Long idMenu) {
    menuService.deleteMenu(idMenu);
  }
}
