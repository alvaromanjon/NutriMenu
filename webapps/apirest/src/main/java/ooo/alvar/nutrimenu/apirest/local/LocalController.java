package ooo.alvar.nutrimenu.apirest.local;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
  public List<Local> getAllLocalesByEmpresa(@PathVariable Long idEmpresa) {
    return localService.getAllLocalesByEmpresa(idEmpresa);
  }

  @RequestMapping("/empresas/{idEmpresa}/locales/{idLocal}")
  public Local getLocal(@PathVariable Long idLocal) {
    return localService.getLocal(idLocal);
  }

  @RequestMapping(method = RequestMethod.POST, value="/empresas/{idEmpresa}/locales")
  public ResponseEntity<Local> addLocal(@PathVariable Long idEmpresa, @RequestBody Local local) {
    Local localCreado = localService.addLocal(idEmpresa, local);
    return new ResponseEntity<>(localCreado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/empresas/{idEmpresa}/locales/{idLocal}")
  public ResponseEntity<Local> updateLocal(@PathVariable Long idEmpresa, @PathVariable Long idLocal, @RequestBody Local local) {
    Local localActualizado = localService.updateLocal(local, idLocal);
    return new ResponseEntity<>(localActualizado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/empresas/{idEmpresa}/locales/{idLocal}")
  public void deleteLocal(@PathVariable Long idLocal) {
    localService.deleteLocal(idLocal);
  }
}
