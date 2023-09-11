package ooo.alvar.nutrimenu.apirest.plato;

import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
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
  public List<Plato> getAllPlatosByEmpresa(@PathVariable String idEmpresa) {
    return platoService.getAllPlatosByEmpresa(idEmpresa);
  }

  @RequestMapping("/empresas/{idEmpresa}/platos/{idPlato}")
  public Plato getPlato(@PathVariable String idPlato) {
    return platoService.getPlato(idPlato);
  }

  @RequestMapping(method = RequestMethod.POST, value="/empresas/{idEmpresa}/platos")
  public ResponseEntity<Plato> addPlato(@PathVariable String idEmpresa, @RequestBody Plato plato) {
    plato.setEmpresa(new Empresa(idEmpresa, "", "", "", "", ""));
    Plato platoCreado = platoService.addPlato(plato);
    return new ResponseEntity<>(platoCreado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/empresas/{idEmpresa}/platos/{idPlato}")
  public ResponseEntity<Plato> updatePlato(@PathVariable String idEmpresa, @PathVariable String idPlato, @RequestBody Plato plato) {
    plato.setEmpresa(new Empresa(idEmpresa, "", "", "", "", ""));
    Plato platoActualizado = platoService.updatePlato(plato, idPlato);
    return new ResponseEntity<>(platoActualizado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/empresas/{idEmpresa}/platos/{idPlato}")
  public void deletePlato(@PathVariable String idPlato) {
    platoService.deletePlato(idPlato);
  }
}
