package ooo.alvar.nutrimenu.apirest.plato;

import ooo.alvar.nutrimenu.apirest.excepciones.LackOfParametersException;
import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import ooo.alvar.nutrimenu.apirest.relaciones.AlimentoDTO;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimento;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoDTO;
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
                                               @RequestParam(required = false, name="id_empresa") Long idEmpresa,
                                               @RequestParam(required = false, name="tipo_plato") tipoPlato plato) {
    List<Plato> listaPlatos = new ArrayList<>();
    if (idPlato != null) {
      listaPlatos.add(platoService.getPlato(idPlato));
    } else if (idEmpresa != null && plato != null) {
      listaPlatos = platoService.getAllPlatosByTipoPlato(idEmpresa, plato);
    } else if (idEmpresa != null) {
      listaPlatos = platoService.getAllPlatosByEmpresa(idEmpresa);
    } else {
      throw new LackOfParametersException("No se ha especificado ningún parámetro de búsqueda");
    }

    return new ResponseEntity<>(listaPlatos, HttpStatus.OK);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.POST, value="/platos")
  public ResponseEntity<PlatoAlimento> addPlato(@RequestParam(name="id_empresa") Long idEmpresa, @RequestBody PlatoDTO platoDTO) {
    Plato plato = new Plato();
    PlatoAlimento platoCreado = new PlatoAlimento();

    plato.setNombre(platoDTO.getNombre());
    plato.setDescripcion(platoDTO.getDescripcion());
    plato.setTipoPlato(platoDTO.getTipoPlato());

    Plato platoInicial = platoService.addPlato(idEmpresa, plato);

    for (AlimentoDTO alimentoDTO : platoDTO.getAlimentos()) {
      platoCreado = platoService.addAlimentoAndCantidadToPlato(platoInicial.getId(), alimentoDTO.getId(), alimentoDTO.getCantidad());
    }

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
