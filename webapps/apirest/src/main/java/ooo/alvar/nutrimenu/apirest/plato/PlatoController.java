package ooo.alvar.nutrimenu.apirest.plato;

import ooo.alvar.nutrimenu.apirest.excepciones.LackOfParametersException;
import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@RestController
public class PlatoController {

  @Autowired
  private PlatoService platoService;

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("/platos")
  public ResponseEntity<List<Plato>> getPlatos(@RequestParam(required = false, name="id_plato") Long idPlato,
                                               @RequestParam(required = false, name="id_local") Long idLocal,
                                               @RequestParam(required = false, name="tipo_plato") tipoPlato plato) {
    List<Plato> listaPlatos = new ArrayList<>();
    if (idPlato != null) {
      listaPlatos.add(platoService.getPlato(idPlato));
    } else if (idLocal != null && plato != null) {
      listaPlatos = platoService.getAllPlatosByTipoPlato(idLocal, plato);
    } else if (idLocal != null) {
      listaPlatos = platoService.getAllPlatosByLocal(idLocal);
    } else {
      throw new LackOfParametersException("No se ha especificado ningún parámetro de búsqueda");
    }

    return new ResponseEntity<>(listaPlatos, HttpStatus.OK);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.POST, value="/platos")
  public ResponseEntity<Plato> addPlato(@RequestParam(name="id_local") Long idLocal, @RequestBody Plato plato) {
    Plato platoCreado = platoService.addPlato(idLocal, plato);
    return new ResponseEntity<>(platoCreado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/add/plato/alimentos")
  public ResponseEntity<PlatoAlimento> addAlimentoToPlato(@RequestParam(name="id_plato") Long idPlato, @RequestParam(name="id_alimento") Long idAlimento) {
    PlatoAlimento platoCreado = platoService.addAlimentoToPlato(idPlato, idAlimento);

    return new ResponseEntity<>(platoCreado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/update/plato/alimentos")
  public ResponseEntity<PlatoAlimento> updateCantidadAlimento(@RequestParam(name="id_plato") Long idPlato, @RequestParam(name="id_alimento") Long idAlimento, @RequestParam Double cantidad) {
    PlatoAlimento platoActualizado = platoService.actualizaCantidad(idPlato, idAlimento, cantidad);
    return new ResponseEntity<>(platoActualizado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/platos")
  public ResponseEntity<Plato> updatePlato(@RequestParam(name="id_plato") Long idPlato, @RequestBody Plato plato) {
    Plato platoActualizado = platoService.updatePlato(plato, idPlato);
    return new ResponseEntity<>(platoActualizado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.DELETE, value="/platos")
  public ResponseEntity<String> deletePlato(@RequestParam(name="id_plato") Long idPlato) {
    platoService.deletePlato(idPlato);
    return new ResponseEntity<>("Plato con id " + idPlato + " eliminado correctamente", HttpStatus.OK);
  }
}
