package ooo.alvar.nutrimenu.apirest.local;

import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LocalController {

  @Autowired
  private LocalService localService;

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("/locales")
  public List<Local> getAllLocales() {
    return localService.getAllLocales();
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("/empresas/{idEmpresa}/locales")
  public List<Local> getAllLocalesByEmpresa(@PathVariable String idEmpresa) {
    return localService.getAllLocalesByEmpresa(idEmpresa);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("/empresas/{idEmpresa}/locales/{idLocal}")
  public Local getLocal(@PathVariable String idLocal) {
    return localService.getLocal(idLocal);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.POST, value="/empresas/{idEmpresa}/locales")
  public ResponseEntity<Local> addLocal(@PathVariable String idEmpresa, @RequestBody Local local) {
    local.setEmpresa(new Empresa(idEmpresa, "", "", "", "", ""));
    Local localCreado = localService.addLocal(local);
    return new ResponseEntity<>(localCreado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/empresas/{idEmpresa}/locales/{idLocal}")
  public ResponseEntity<Local> updateLocal(@PathVariable String idEmpresa, @PathVariable String idLocal, @RequestBody Local local) {
    local.setEmpresa(new Empresa(idEmpresa, "", "", "", "", ""));
    Local localActualizado = localService.updateLocal(local, idLocal);
    return new ResponseEntity<>(localActualizado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.DELETE, value="/empresas/{idEmpresa}/locales/{idLocal}")
  public void deleteLocal(@PathVariable String idLocal) {
    localService.deleteLocal(idLocal);
  }
}
