package ooo.alvar.nutrimenu.apirest.alimento;

import ooo.alvar.nutrimenu.apirest.excepciones.LackOfParametersException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento.grupoAlimento;

import java.util.ArrayList;
import java.util.List;

@Controller
public class AlimentoController {

  @Autowired
  private AlimentoService alimentoService;

  @RequestMapping("/alimentos")
  public ResponseEntity<List<Alimento>> getAlimentos(@RequestParam(required = false, name="id_alimento") Long id,
                                                     @RequestParam(required = false) String nombre,
                                                     @RequestParam(required = false, name = "tipo_alimento") grupoAlimento grupoAlimento,
                                                     @RequestParam(required = false, name = "id_empresa") Long idEmpresa) {
    List<Alimento> listaAlimentos = new ArrayList<>();

    if (id != null) {
      listaAlimentos.add(alimentoService.getAlimento(id));
    } else if (nombre != null) {
      listaAlimentos = alimentoService.getAllAlimentosByNombre(nombre);
    } else if (grupoAlimento != null) {
      listaAlimentos = alimentoService.getAllAlimentosByGrupoAlimento(grupoAlimento);
    } else if (idEmpresa != null) {
      listaAlimentos = alimentoService.getAllAlimentosByEmpresa(idEmpresa);
    } else {
      throw new LackOfParametersException("No se ha especificado ningún parámetro de búsqueda");
    }

    return new ResponseEntity<>(listaAlimentos, HttpStatus.OK);
  }

  @RequestMapping(method = RequestMethod.POST, value="/alimentos")
  public ResponseEntity<Alimento> addAlimento(@RequestBody Alimento alimento, @RequestParam(name = "id_empresa") Long idEmpresa) {
    Alimento alimentoCreado = alimentoService.addAlimento(idEmpresa, alimento);
    return new ResponseEntity<>(alimentoCreado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="add/alimento/componentes")
  public ResponseEntity<Alimento> addComponentesNutricionalesToAlimento(@RequestParam(name="id_componente") Long idComponente, @RequestParam(name="id_alimento") Long idAlimento) {
    Alimento alimentoActualizado = alimentoService.addComponenteNutricionalToAlimento(idAlimento, idComponente);
    return new ResponseEntity<Alimento>(alimentoActualizado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/alimentos")
  public ResponseEntity<Alimento> updateAlimento(@RequestBody Alimento alimento, @RequestParam(name="id_alimento") Long id) {
    Alimento alimentoActualizado = alimentoService.updateAlimento(alimento, id);
    return new ResponseEntity<>(alimentoActualizado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/alimentos")
  public ResponseEntity<String> deleteAlimento(@RequestParam(name="id_alimento") Long id) {
    alimentoService.deleteAlimento(id);
    return new ResponseEntity<>("Alimento con id " + id + " borrado correctamente", HttpStatus.OK);
  }
}
