package ooo.alvar.nutrimenu.apirest.alimento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento.grupoAlimento;

import java.util.ArrayList;
import java.util.List;

@Controller
public class AlimentoController {

  @Autowired
  private AlimentoService alimentoService;

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("/alimentos")
  public ResponseEntity<List<Alimento>> getAlimentos(@RequestParam(required = false, name="id_alimento") Long id,
                                                     @RequestParam(required = false) String nombre,
                                                     @RequestParam(required = false, name = "tipo_alimento") grupoAlimento grupoAlimento) {
    List<Alimento> listaAlimentos = new ArrayList<>();

    if (id != null) {
      listaAlimentos.add(alimentoService.getAlimento(id));
    } else if (nombre != null) {
      listaAlimentos = alimentoService.getAllAlimentosByNombre(nombre);
    } else if (grupoAlimento != null) {
      listaAlimentos = alimentoService.getAllAlimentosByGrupoAlimento(grupoAlimento);
    } else {
      listaAlimentos = alimentoService.getAllAlimentos();
    }

    return new ResponseEntity<>(listaAlimentos, HttpStatus.OK);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.POST, value="/alimentos")
  public ResponseEntity<Alimento> addAlimento(@RequestBody Alimento alimento) {
    Alimento alimentoCreado = alimentoService.addAlimento(alimento);
    return new ResponseEntity<>(alimentoCreado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="add/alimento/componentes")
  public ResponseEntity<Alimento> addComponentesNutricionalesToAlimento(@RequestParam(name="id_componente") Long idComponente, @RequestParam(name="id_alimento") Long idAlimento) {
    Alimento alimentoActualizado = alimentoService.addComponenteNutricionalToAlimento(idAlimento, idComponente);
    return new ResponseEntity<>(alimentoActualizado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/alimentos")
  public ResponseEntity<Alimento> updateAlimento(@RequestBody Alimento alimento, @RequestParam(name="id_alimento") Long id) {
    Alimento alimentoActualizado = alimentoService.updateAlimento(alimento, id);
    return new ResponseEntity<>(alimentoActualizado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.DELETE, value="/alimentos")
  public ResponseEntity<String> deleteAlimento(@RequestParam(name="id_alimento") Long id) {
    alimentoService.deleteAlimento(id);
    return new ResponseEntity<>("Alimento con id " + id + " borrado correctamente", HttpStatus.OK);
  }
}
