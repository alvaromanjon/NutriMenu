package ooo.alvar.nutrimenu.apirest.plato;

import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class PlatoController {

  @Autowired
  private PlatoService platoService;

  @RequestMapping("/empresas/{idEmpresa}/platos")
  public List<Plato> getAllPlatosByEmpresa(@PathVariable Long idEmpresa) {
    return platoService.getAllPlatosByEmpresa(idEmpresa);
  }

  @RequestMapping("/empresas/{idEmpresa}/platos/tipo/{plato}")
  public List<Plato> getAllPlatosByTipoPlato(@PathVariable Long idEmpresa, @PathVariable tipoPlato plato) {
    return platoService.getAllPlatosByTipoPlato(idEmpresa, plato);
  }

  @RequestMapping("/empresas/{idEmpresa}/platos/{idPlato}")
  public Plato getPlato(@PathVariable Long idPlato) {
    return platoService.getPlato(idPlato);
  }

  @RequestMapping(method = RequestMethod.POST, value="/empresas/{idEmpresa}/platos")
  public ResponseEntity<Plato> addPlato(@PathVariable Long idEmpresa, @RequestBody Plato plato) {
    Plato platoCreado = platoService.addPlato(idEmpresa, plato);
    return new ResponseEntity<>(platoCreado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/empresas/{idEmpresa}/platos/{idPlato}")
  public ResponseEntity<Plato> updatePlato(@PathVariable Long idEmpresa, @PathVariable Long idPlato, @RequestBody Plato plato) {
    Plato platoActualizado = platoService.updatePlato(plato, idPlato);
    return new ResponseEntity<>(platoActualizado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/empresas/{idEmpresa}/platos/{idPlato}")
  public void deletePlato(@PathVariable Long idPlato) {
    platoService.deletePlato(idPlato);
  }
}
