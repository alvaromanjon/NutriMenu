package ooo.alvar.nutrimenu.apirest.local;

import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LocalController {

  @Autowired
  private LocalService localService;

  @RequestMapping("/locales")
  public List<Local> getAllLocales() {
    return localService.getAllLocales();
  }

  @RequestMapping("/empresas/{idEmpresa}/locales")
  public List<Local> getAllLocalesByEmpresa(@PathVariable String idEmpresa) {
    return localService.getAllLocalesByEmpresa(idEmpresa);
  }

  @RequestMapping("/locales/{idLocal}")
  public Local getLocal(@PathVariable String idLocal) {
    return localService.getLocal(idLocal);
  }

  @RequestMapping(method = RequestMethod.POST, value="/empresas/{idEmpresa}/locales")
  public void addLocal(@PathVariable String idEmpresa, @RequestBody Local local) {
    local.setEmpresa(new Empresa(idEmpresa, "", "", "", "", ""));
    localService.addLocal(local);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/empresas/{idEmpresa}/locales/{idLocal}")
  public void updateLocal(@PathVariable String idEmpresa, @PathVariable String idLocal, @RequestBody Local local) {
    local.setEmpresa(new Empresa(idEmpresa, "", "", "", "", ""));
    localService.updateLocal(local, idLocal);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/empresas/{idEmpresa}/locales/{idLocal}")
  public void deleteLocal(@PathVariable String idLocal) {
    localService.deleteLocal(idLocal);
  }
}
