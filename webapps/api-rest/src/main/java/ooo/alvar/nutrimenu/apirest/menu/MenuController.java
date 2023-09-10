package ooo.alvar.nutrimenu.apirest.menu;

import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
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
  public List<Menu> getAllMenusByEmpresa(@PathVariable String idEmpresa) {
    return menuService.getAllMenusByEmpresa(idEmpresa);
  }

  @RequestMapping("/empresas/{idEmpresa}/menus/{idMenu}")
  public Menu getMenu(@PathVariable String idMenu) {
    return menuService.getMenu(idMenu);
  }

  @RequestMapping(method = RequestMethod.POST, value="/empresas/{idEmpresa}/menus")
  public ResponseEntity<Menu> addMenu(@PathVariable String idEmpresa, @RequestBody Menu menu) {
    menu.setEmpresa(new Empresa(idEmpresa, "", "", "", "", ""));
    Menu menuCreado = menuService.addMenu(menu);
    return new ResponseEntity<>(menuCreado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/empresas/{idEmpresa}/menus/{idMenu}")
  public ResponseEntity<Menu> updateMenu(@PathVariable String idEmpresa, @PathVariable String idMenu, @RequestBody Menu menu) {
    menu.setEmpresa(new Empresa(idEmpresa, "", "", "", "", ""));
    Menu menuActualizado = menuService.updateMenu(menu, idMenu);
    return new ResponseEntity<>(menuActualizado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/empresas/{idEmpresa}/menus/{idMenu}")
  public void deleteMenu(@PathVariable String idMenu) {
    menuService.deleteMenu(idMenu);
  }
}
