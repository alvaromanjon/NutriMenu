package ooo.alvar.nutrimenu.apirest.local;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class LocalController {

  @Autowired
  private LocalService localService;

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("/locales")
  public ResponseEntity<List<Local>> getLocales(@RequestParam(required = false, name = "id_local") Long id,
                                                @RequestParam(required = false) String nombre,
                                                @RequestParam(required = false) String email,
                                                @RequestParam(required = false) String telefono,
                                                @RequestParam(required = false, name = "id_empresa") Long idEmpresa) {
    List<Local> listaLocales = new ArrayList<>();
    if (id != null) {
      listaLocales.add(localService.getLocal(id));
    } else if  (email != null) {
      listaLocales.add(localService.getLocalByEmail(email));
    } else if (telefono != null) {
      listaLocales.add(localService.getLocalByTelefono(telefono));
    } else if (idEmpresa != null) {
      if (nombre != null) {
        listaLocales = localService.getLocalByNombre(nombre, idEmpresa);
      } else {
        listaLocales = localService.getAllLocalesByEmpresa(idEmpresa);
      }
    } else {
      listaLocales = localService.getAllLocales();
    }

    return new ResponseEntity<>(listaLocales, HttpStatus.OK);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.POST, value="/locales")
  public ResponseEntity<Local> addLocal(@RequestParam(name="id_empresa") Long idEmpresa, @RequestBody Local local) {
    Local localCreado = localService.addLocal(idEmpresa, local);
    return new ResponseEntity<>(localCreado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/add/local/menus")
  public ResponseEntity<Local> addMenuToLocal(@RequestParam(name="id_local") Long idLocal, @RequestParam(name="id_menu") Long idMenu) {
    Local localCreado = localService.addMenuToLocal(idLocal, idMenu);
    return new ResponseEntity<>(localCreado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/locales")
  public ResponseEntity<Local> updateLocal(@RequestParam(name="id_local") Long idLocal, @RequestBody Local local) {
    Local localActualizado = localService.updateLocal(local, idLocal);
    return new ResponseEntity<>(localActualizado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.DELETE, value="/locales")
  public ResponseEntity<String> deleteLocal(@RequestParam(name="id_local") Long idLocal) {
    localService.deleteLocal(idLocal);
    return new ResponseEntity<>("Local con id " + idLocal + " eliminado correctamente", HttpStatus.OK);
  }
}
