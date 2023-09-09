package ooo.alvar.nutrimenu.apirest.menu;

import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import org.springframework.beans.factory.annotation.Autowired;
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
  public void addMenu(@PathVariable String idEmpresa, @RequestBody Menu menu) {
    menu.setEmpresa(new Empresa(idEmpresa, "", "", "", "", ""));
    menuService.addMenu(menu);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/empresas/{idEmpresa}/menus/{idMenu}")
  public void updateMenu(@PathVariable String idEmpresa, @PathVariable String idMenu, @RequestBody Menu menu) {
    menu.setEmpresa(new Empresa(idEmpresa, "", "", "", "", ""));
    menuService.updateMenu(menu, idMenu);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/empresas/{idEmpresa}/menus/{idMenu}")
  public void deleteMenu(@PathVariable String idMenu) {
    menuService.deleteMenu(idMenu);
  }
}
